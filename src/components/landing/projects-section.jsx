import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

/**
 * ProjectsSection 컴포넌트
 *
 * Props:
 * - 없음
 *
 * Example usage:
 * <ProjectsSection />
 */
function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={1}
          sx={{
            borderRadius: 3,
            border: 1,
            borderColor: 'divider',
          }}
        >
          <CardContent sx={{ py: { xs: 5, md: 8 }, px: { xs: 3, md: 6 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                fontWeight: 600,
                color: 'text.primary',
                mb: 3,
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
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => navigate('/projects')}
                sx={{ px: 4 }}
              >
                더 보기
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default ProjectsSection;
