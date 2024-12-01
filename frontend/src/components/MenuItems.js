import {
  Home as HomeIcon,
  Favorite as FavoriteIcon,
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  Logout as LogoutIcon,
  LocationOn as LocationOnIcon,
  Payment as PaymentIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Reorder as ReorderIcon,
  HelpOutline as HelpOutlineIcon,
  Try as TryIcon,
} from "@mui/icons-material";
const menuItems = [
  { text: "Home", path: "/layout/home", icon: <HomeIcon /> },
  { text: "Personal Info", path: "/layout/personalInfo", icon: <PersonIcon /> },
  { text: "Addresses", path: "/layout/addresses", icon: <LocationOnIcon /> },
  { text: "Cart", path: "/layout/cart", icon: <ShoppingCartIcon /> },
  { text: "Favorites", path: "/layout/favorites", icon: <FavoriteIcon /> },
  {
    text: "Notification",
    path: "/layout/notification",
    icon: <NotificationsIcon />,
  },
  {
    text: "Payment Method",
    path: "/layout/paymentmethod",
    icon: <PaymentIcon />,
  },
  { text: "My Orders", path: "/layout/myorders", icon: <ReorderIcon /> },
  { text: "FAQs", path: "/layout/faqs", icon: <HelpOutlineIcon /> },
  { text: "User Reviews", path: "/layout/userreviews", icon: <TryIcon /> },
  { text: "Settings", path: "/layout/settings", icon: <SettingsIcon /> },
  { text: "Logout", path: "/login", icon: <LogoutIcon /> },
];
export default menuItems;
