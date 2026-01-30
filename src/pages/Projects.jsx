import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, md: 8 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="md" sx={{ py: 4 }}>
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
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                color: 'text.primary',
                mb: 4,
                textAlign: 'center',
              }}
            >
              Projects
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                color: 'text.secondary',
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Projects;
