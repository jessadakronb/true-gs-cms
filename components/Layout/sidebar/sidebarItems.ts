import {
  BorderAllIcon,
  AlertCircleIcon,
  CircleDotIcon,
  BoxMultiple1Icon,
  AdjustmentsHorizontalIcon,
  LayoutDashboardIcon,
  UserIcon,
  UserMinusIcon,
  UsersIcon,
  MedicalCrossIcon,
  FolderIcon,
  FoldersIcon,
  FoldUpIcon,
  FolderPlusIcon,
  BrandGoogleDriveIcon,
} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipBgColor?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
  expanded?: boolean;

}

const sidebarItem: menu[] = [
  { header: 'Home' },
  {
    title: "Dashboard",
    icon: LayoutDashboardIcon,
    to: "/",
  },
  {
    title: "User Overview",
    icon: UsersIcon,
    to: "/user",
    children: [
      {
        title: "Profile",
        to: "/user/profile",
      },
      {
        title: "Settings",
        to: "/user/settings",
      },
      // Add more sub-menu items as needed
    ],
    expanded: false, // Initialize the expanded property
  },
  {
    title: "Media Center",
    icon: BrandGoogleDriveIcon,
    to: "/media-center",
  },
  { header: 'Utilities' },
  {
    title: "Alert",
    icon: AlertCircleIcon,
    to: "/ui-components/alerts",
  },
  {
    title: "Button",
    icon: CircleDotIcon,
    to: "/ui-components/buttons",
  },
  {
    title: "Cards",
    icon: BoxMultiple1Icon,
    to: "/ui-components/cards",
  },
  {
    title: "Curousel",
    icon: AdjustmentsHorizontalIcon,
    to: "/ui-components/curousel",
  },
  {
    title: "Tables",
    icon: BorderAllIcon,
    to: "/ui-components/tables",
  },
];

export default sidebarItem;
