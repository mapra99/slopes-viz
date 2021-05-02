import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core';

const Layout = ({children}) => (
  <>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          DataViz
        </Typography>
      </Toolbar>
    </AppBar>
    <Box p="90px 0 30px" height="100vh">
      <Container maxWidth="">
        {children}
      </Container>
    </Box>
  </>
)

export default Layout
