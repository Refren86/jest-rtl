import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type Props = {};

export const MuiMode = ({}: Props) => {
  const theme = useTheme();

  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>;
};
