import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Guestbook from './guestbook';

/**
 * ContactInfo 컴포넌트
 *
 * Props:
 * @param {React.ElementType} icon - 아이콘 컴포넌트 [Required]
 * @param {string} label - 라벨 텍스트 [Required]
 * @param {string} value - 값 텍스트 [Required]
 * @param {string} href - 링크 URL [Optional]
 *
 * Example usage:
 * <ContactInfo icon={EmailIcon} label="Email" value="example@email.com" />
 */
function ContactInfo({ icon: Icon, label, value, href }) {
  const content = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        py: 1.5,
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: 'grey.100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon sx={{ color: 'grey.700', fontSize: 20 }} />
      </Box>
      <Box>
        <Typography
          variant="caption"
          sx={{ color: 'grey.500', display: 'block', lineHeight: 1 }}
        >
          {label}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'grey.900',
            fontWeight: 500,
            mt: 0.5,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );

  if (href) {
    return (
      <Box
        component="a"
        href={href}
        sx={{
          textDecoration: 'none',
          display: 'block',
          borderRadius: 2,
          transition: 'background-color 0.2s',
          '&:hover': { bgcolor: 'grey.50' },
          px: 1,
          mx: -1,
        }}
      >
        {content}
      </Box>
    );
  }

  return content;
}

/**
 * SocialButton 컴포넌트
 *
 * Props:
 * @param {React.ElementType} icon - 아이콘 컴포넌트 [Required]
 * @param {string} href - 링크 URL [Required]
 * @param {string} label - 접근성 라벨 [Required]
 *
 * Example usage:
 * <SocialButton icon={GitHubIcon} href="https://github.com" label="GitHub" />
 */
function SocialButton({ icon: Icon, href, label }) {
  return (
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      sx={{
        width: 48,
        height: 48,
        bgcolor: 'grey.900',
        color: 'white',
        transition: 'all 0.2s',
        '&:hover': {
          bgcolor: 'grey.700',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Icon />
    </IconButton>
  );
}

/**
 * ContactSection 컴포넌트
 *
 * Props:
 * - 없음
 *
 * Example usage:
 * <ContactSection />
 */
function ContactSection() {
  const contactInfo = [
    {
      icon: EmailIcon,
      label: 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+82 10-1234-5678',
      href: 'tel:+821012345678',
    },
    {
      icon: LocationOnIcon,
      label: 'Location',
      value: 'Seoul, South Korea',
    },
  ];

  const socialLinks = [
    { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'grey.100',
      }}
    >
      <Container maxWidth="md">
        <Card
          elevation={0}
          sx={{
            bgcolor: 'white',
            borderRadius: 3,
            border: 1,
            borderColor: 'grey.200',
          }}
        >
          <CardContent sx={{ py: { xs: 5, md: 8 }, px: { xs: 3, md: 6 } }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '1.75rem', md: '2.25rem' },
                fontWeight: 700,
                color: 'grey.900',
                mb: 1,
                textAlign: 'center',
              }}
            >
              Contact
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'grey.500',
                textAlign: 'center',
                mb: 4,
              }}
            >
              궁금한 점이 있으시면 연락주세요
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 4 }}>
              {contactInfo.map((info, index) => (
                <ContactInfo
                  key={index}
                  icon={info.icon}
                  label={info.label}
                  value={info.value}
                  href={info.href}
                />
              ))}
            </Box>

            {/* Social Links */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mb: 4,
              }}
            >
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={index}
                  icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </Box>

            <Divider sx={{ my: 4 }} />

            {/* Guestbook */}
            <Guestbook />
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default ContactSection;
