import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/**
 * SkillTreeSection 컴포넌트
 *
 * Props:
 * - 없음
 *
 * Example usage:
 * <SkillTreeSection />
 */
function SkillTreeSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'secondary.main',
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={0}
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
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
              Skill Tree
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'text.secondary',
                textAlign: 'center',
                lineHeight: 1.8,
              }}
            >
              여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SkillTreeSection;
