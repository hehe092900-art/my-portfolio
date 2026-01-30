import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { supabase } from '../lib/supabase';

/**
 * ProjectCard 컴포넌트
 *
 * Props:
 * @param {object} project - 프로젝트 데이터 객체 [Required]
 *
 * Example usage:
 * <ProjectCard project={projectData} />
 */
function ProjectCard({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      elevation={1}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        border: 1,
        borderColor: 'divider',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <Box sx={{ position: 'relative', paddingTop: '56.25%', bgcolor: 'grey.100' }}>
        {!imageLoaded && !imageError && (
          <Skeleton
            variant="rectangular"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
        )}
        <CardMedia
          component="img"
          image={project.thumbnail_url}
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: imageLoaded ? 'block' : 'none',
          }}
        />
        {imageError && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'grey.200',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              이미지 로드 실패
            </Typography>
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            {project.title}
          </Typography>
          <IconButton
            size="small"
            href={project.detail_url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            <OpenInNewIcon fontSize="small" />
          </IconButton>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            lineHeight: 1.6,
            minHeight: { xs: 'auto', md: '2.4em' },
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {project.tech_stack?.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.7rem',
                height: 24,
                borderColor: 'divider',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

/**
 * Projects 페이지 컴포넌트
 *
 * Props:
 * - 없음
 *
 * Example usage:
 * <Projects />
 */
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('프로젝트 로드 오류:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        py: { xs: 4, md: 8 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            color: 'text.primary',
            mb: { xs: 2, md: 3 },
            textAlign: 'center',
          }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', md: '1.125rem' },
            color: 'text.secondary',
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          제가 진행한 프로젝트들입니다. 각 카드를 클릭하여 사이트를 방문할 수 있습니다.
        </Typography>

        {loading ? (
          <Grid container spacing={3}>
            {[1, 2, 3].map((item) => (
              <Grid key={item} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Skeleton variant="rectangular" height={320} sx={{ borderRadius: 3 }} />
              </Grid>
            ))}
          </Grid>
        ) : projects.length > 0 ? (
          <Grid container spacing={3}>
            {projects.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Card
            elevation={1}
            sx={{
              borderRadius: 3,
              border: 1,
              borderColor: 'divider',
            }}
          >
            <CardContent sx={{ py: { xs: 6, md: 10 }, px: { xs: 3, md: 6 } }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  color: 'text.secondary',
                  textAlign: 'center',
                }}
              >
                등록된 프로젝트가 없습니다.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
}

export default Projects;
