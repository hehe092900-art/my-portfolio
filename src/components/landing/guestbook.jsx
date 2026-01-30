import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { supabase } from '../../lib/supabase';

/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmitSuccess - 제출 성공 시 호출되는 함수 [Required]
 *
 * Example usage:
 * <GuestbookForm onSubmitSuccess={handleRefresh} />
 */
function GuestbookForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    authorName: '',
    message: '',
    occupation: '',
    email: '',
    isEmailPublic: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      setError('메시지를 입력해주세요.');
      return;
    }

    setLoading(true);
    setError(null);

    const { error: submitError } = await supabase
      .from('portfolio_guestbook')
      .insert([
        {
          author_name: formData.authorName.trim() || '익명',
          message: formData.message.trim(),
          occupation: formData.occupation.trim() || null,
          email: formData.email.trim() || null,
          is_email_public: formData.isEmailPublic,
        },
      ]);

    setLoading(false);

    if (submitError) {
      setError('메시지 등록에 실패했습니다. 다시 시도해주세요.');
      return;
    }

    setFormData({
      authorName: '',
      message: '',
      occupation: '',
      email: '',
      isEmailPublic: false,
    });
    onSubmitSuccess();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
      >
        방명록 작성
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="authorName"
            label="이름"
            placeholder="익명"
            value={formData.authorName}
            onChange={handleChange}
            size="small"
            sx={{ bgcolor: 'background.paper' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="occupation"
            label="소속/직업"
            placeholder="선택사항"
            value={formData.occupation}
            onChange={handleChange}
            size="small"
            sx={{ bgcolor: 'background.paper' }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="email"
            label="이메일"
            type="email"
            placeholder="선택사항"
            value={formData.email}
            onChange={handleChange}
            size="small"
            sx={{ bgcolor: 'background.paper' }}
          />
        </Grid>
        {formData.email && (
          <Grid size={{ xs: 12 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isEmailPublic"
                  checked={formData.isEmailPublic}
                  onChange={handleChange}
                  size="small"
                />
              }
              label={
                <Typography variant="body2" color="text.secondary">
                  이메일을 공개합니다
                </Typography>
              }
            />
          </Grid>
        )}
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            name="message"
            label="메시지"
            placeholder="방명록을 남겨주세요!"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={3}
            required
            sx={{ bgcolor: 'background.paper' }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              bgcolor: 'grey.900',
              '&:hover': { bgcolor: 'grey.800' },
              px: 4,
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : '등록'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

/**
 * GuestbookList 컴포넌트
 *
 * Props:
 * @param {Array} entries - 방명록 항목 배열 [Required]
 * @param {boolean} isLoading - 로딩 상태 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookList entries={guestbookData} isLoading={false} />
 */
function GuestbookList({ entries, isLoading = false }) {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (entries.length === 0) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: 'center', py: 4 }}
      >
        아직 방명록이 없습니다. 첫 번째로 메시지를 남겨보세요!
      </Typography>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}
      >
        방명록 ({entries.length})
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {entries.map((entry) => (
          <Card
            key={entry.id}
            elevation={0}
            sx={{
              border: 1,
              borderColor: 'grey.200',
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ py: 2, '&:last-child': { pb: 2 } }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  mb: 1,
                }}
              >
                <Box>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    {entry.author_name}
                  </Typography>
                  {entry.occupation && (
                    <Typography variant="caption" color="text.secondary">
                      {entry.occupation}
                    </Typography>
                  )}
                </Box>
                <Typography variant="caption" color="text.secondary">
                  {formatDate(entry.created_at)}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: 'text.primary', whiteSpace: 'pre-wrap' }}
              >
                {entry.message}
              </Typography>
              {entry.is_email_public && entry.email && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ mt: 1, display: 'block' }}
                >
                  {entry.email}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

/**
 * Guestbook 컴포넌트
 *
 * Props:
 * - 없음
 *
 * Example usage:
 * <Guestbook />
 */
function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEntries = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('portfolio_guestbook')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setEntries(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <Box>
      <GuestbookForm onSubmitSuccess={fetchEntries} />
      <Divider sx={{ my: 3 }} />
      <GuestbookList entries={entries} isLoading={loading} />
    </Box>
  );
}

export default Guestbook;
