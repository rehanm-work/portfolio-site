import { Button, IconButton, Link } from '@mui/material';
import { styled } from '@mui/system';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(90deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: '1s',
  }),
}));

const MenuButton = styled((props) => {
  const { children, link, ...others } = props;
  return (
    <button {...others}>
      <Link href={link}>{children}</Link>
    </button>
  );
})({
  color: 'white',
  fontSize: '15px',
  padding: '1rem 1.5rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  '& > a': {
    color: 'inherit',
    textDecoration: 'none',
  },
});

const MobileMenuButton = styled((props) => {
  const { setExpanded, children, link, ...others } = props;
  return (
    <button onClick={() => setExpanded(false)} {...others}>
      <Link href={link}>{children}</Link>
    </button>
  );
})({
  color: 'white',

  width: '100%',
  fontSize: '15px',
  padding: '1rem 1.5rem',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  '& > a': {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: '1',
    width: '100%',
    color: 'inherit',
    textDecoration: 'none',
  },
});

const PrimaryButton = styled((props) => {
  const { children, ...others } = props;
  return (
    <Button disableRipple {...others}>
      {props.children}
    </Button>
  );
})(({ theme, background, padding, textcolor }) => ({
  padding: padding || '0.5rem 1rem',
  background: background || 'white',
  color: textcolor || theme.palette.primary.main,
  border: 'none',
  borderRadius: '50px',
  marginLeft: 'auto',
  boxShadow: '2px 2px 4px 0 black',
  '&:active': {
    boxShadow: '1px 1px 2px 0 black',
    background: background || 'white',
  },
  '&:hover': {
    background: background || 'white',
  },
  '@media screen and (max-width: 878px)': {
    fontSize: '1rem',
  },
}));

export { MenuButton, PrimaryButton, ExpandMore, MobileMenuButton };
