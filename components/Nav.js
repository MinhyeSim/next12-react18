import React,{useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import Router from "next/router";
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import tableStyles from "@/styles/Table.module.css"
import MenuItem from '@mui/material/MenuItem';
//import Home from "@/components"
import { createSvgIcon } from '@mui/material/utils';

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);

const pages = ['카운터', '계산기', 'BMI', '게시판'];
const preSettings = ['회원가입', '로그인'];
const postSettings = ['프로필', '정보수정', '로그아웃', '회원탈퇴'];

export function Nav(){
  const [userUrls, setUserUrls] = useState([])
  const [userSubTitle, setUserSubTitle] = useState([])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (value) => {
    switch(value){
      case '회원가입': window.location.href='/user/join'
                      break;
      case '로그인': window.location.href='/user/login'
                      break;
      default: window.location.href='/'
                      break;
    }
    setAnchorElUser(null);
  };  

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser")
    if (loginUser === null) {
      setUserUrls(["/user/join","/user/login"])
      setUserSubTitle(["회원가입","로그인"])
    } else {
      setUserUrls(["/user/logout","/user/profile","/user/modifyUser","/user/delUser","user/getUsers"])
      setUserSubTitle(["로그아웃","프로필","회원수정","회원탈퇴","회원목록"])
    }
  }, [])

  const basicUrls = ["/basic/counter","/basic/calc","/basic/bmi"]
  const basicSubTitle = ["counter","calc","bmi"]
  // const userUrls = ["/user/join","/user/login","/user/logout","/user/profile","/user/updUser","/user/withdrawUser","user/getUsers"]
  // const userSubTitle = ["회원가입","로그인","로그아웃","프로필","회원수정","회원탈퇴","회원목록"]
  const todoUrls = ["/todo/addTodo","/todo/getTodos","/todo/modifyTodo","/todo/removeTodo"]
  const todoSubTitle = ["할일등록","할일목록","할일수정","할일삭제"]
  const gameUrls = ["/game/addGame","/game/getGames","/game/modifyGame","/game/removeGame"]
  const gameSubTitle = ["게임등록","게임목록","게임수정","게임삭제"]
  const teamUrls = ["/team/addTeam","/team/getTeams","/team/modifyTeam","/team/removeTeam"]
  const teamSubTitle = ["팀등록","팀목록","팀수정","팀삭제"]
  const boardUrls = ["/board/write","/board/list","/board/modifyArticle","/board/removeArticle"]
  const boardSubTitle = ["글등록","글목록","글수정","글삭제"]
  const handleClick = (value) => { 
    switch(value){
      case '카운터': window.location.href='/basic/counter'
      break;
      case '계산기': window.location.href='/basic/calc'
      break;
      case 'BMI': window.location.href='/basic/bmi'
      break;
      case '게시판': window.location.href='/board/list'
      break;
      default: window.location.href='/'
      break;
    }
  }
  const handleAuth = (value) => {
    alert('handleAuth '+value)
    switch(value) {
      case '회원가입':  window.location.href='/user/join' 
                      break;
      case '로그인':  window.location.href='/user/login' 
                      break;
      default: window.location.href='/'
                      break;
    }
  }
  return (
    <AppBar position="static" style={{marginBottom:"70px"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Box
              sx={{
                '& > :not(style)': {
                  m: 2,
                },
              }}
            >
              <a href='/'>
              <HomeIcon />
              <HomeIcon color="primary" /></a>
            </Box>
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleClick(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://contents.sixshop.com/thumbnails/uploadedFiles/56465/product/image_1607438301220_750.jpg" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleCloseUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="data:image/png;base64,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" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleAuth}
            >
              {preSettings.map((setting) => (//회원가입, 로그인 부분
                <MenuItem key={setting}>
                  <Typography textAlign="center" onClick={()=>handleAuth(setting)}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {props.urls.map(function(url, i){
            return <MenuItem onClick={handleClose} key={i}><Link href={url} >{props.subTitles[i]}</Link></MenuItem>
          })}
      </Menu></>
}