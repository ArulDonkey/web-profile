import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Font Awesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faCode);

import CustomButton from "../components/CustomButton";

const Header = ({ onSidebarOpen }) => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });
  
  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={trigger ? 1 : 0}
        sx={{
          top: 0,
          border: 0,
          backgroundColor: trigger ? theme.palette.background.default : "transparent",
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <IconButton 
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            sx={{ 
              color: theme.palette.primary.main,
              display: { xs: "block", md: "none" } 
            }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton size="large" disabled>
              <FontAwesomeIcon 
                icon={faCode} 
                style={{ 
                  color: theme.palette.primary.main,
                  height: 45, 
                  width: 45
                }} 
              />
              <Typography 
                variant="h3" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  marginLeft: "10px",
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  textDecoration: "none",
                  display: { md: "inline", xs: "none" }
                }}
              >
                Web Profile
              </Typography>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box 
            sx={{ 
              alignItems: "center",
              display: { md: "flex", xs: "none" } 
            }}
          >
            <CustomButton 
              href="#home"
              text="Home"
            />
            <CustomButton 
              href="#about"
              text="About"
            />
            <CustomButton 
              href="#projects"
              text="Projects"
            />
            <CustomButton 
              href="#technologies"
              text="Galery"
            />
            <CustomButton
              href="#testimonials"
              text="Berita"
            />
            <CustomButton 
              href="#contact"
              text="Contact"
            />
          </Box>
          <Divider
            orientation="vertical"
            sx={{ 
              height: 32, 
              mx: 2,
              display: { lg: "flex", md: "none", xs: "none" } 
            }} 
          />
          <Box sx={{ display: { lg: "flex", md: "none", xs: "none" } }}>
            <IconButton 
              aria-label="YouTube" 
              href="https://www.youtube.com/channel/UCLTAzazioAFa4wdqfoa2nYQ"
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <YouTubeIcon fontSize="large" />
            </IconButton>
            <IconButton 
              aria-label="Instagram" 
              href="https://instagram.com/arulbaee_?igshid=YmMyMTA2M2Y="
              target="_blank"
              sx={{ 
                color: theme.palette.primary.main,
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Header;
