import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  ClockIcon,
  InboxArrowDownIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  BellIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  AdjustmentsHorizontalIcon,
  EnvelopeIcon,
  ArrowLeftOnRectangleIcon,
  PlusIcon as PlusIconO,
  PaperAirplaneIcon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlayIcon,
  CheckIcon,
  ArrowUpIcon as ArrowUpIconB,
  PlusIcon,
} from "@heroicons/react/20/solid";

export const Home = ({ className }) => {
  return <HomeIcon className={className} />;
};

export const Request = ({ className }) => {
  return <ArrowRightOnRectangleIcon className={className} />;
};

export const History = ({ className }) => {
  return <ClockIcon className={className} />;
};

export const Transaction = ({ className }) => {
  return <InboxArrowDownIcon className={className} />;
};

export const Search = ({ className }) => {
  return <MagnifyingGlassIcon className={className} />;
};

export const Alert = ({ className }) => {
  return <BellAlertIcon className={className} />;
};

export const NoAlert = ({ className }) => {
  return <BellIcon className={className} />;
};

export const ArrowUp = ({ className }) => {
  return <ArrowUpIcon className={className} />;
};

export const ArrowUpBold = ({ className }) => {
  return <ArrowUpIconB className={className} />;
};

export const DownUp = ({ className }) => {
  return <ArrowDownIcon className={className} />;
};

export const DownIcon = ({ className }) => {
  return <ChevronDownIcon className={className} />;
};

export const UpIcon = ({ className }) => {
  return <ChevronUpIcon className={className} />;
};

export const DoubleRight = ({ className }) => {
  return <ChevronDoubleRightIcon className={className} />;
};

export const Settings = ({ className }) => {
  return <AdjustmentsHorizontalIcon className={className} />;
};

export const Envelope = ({ className }) => {
  return <EnvelopeIcon className={className} />;
};

export const LogOut = ({ className }) => {
  return <ArrowLeftOnRectangleIcon className={className} />;
};

export const PlaySolid = ({ className }) => {
  return <PlayIcon className={className} />;
};

export const CheckedIcon = ({ className }) => {
  return <CheckIcon className={className} />;
};

export const PlusBold = ({ className }) => {
  return <PlusIcon className={className} />;
};

export const PlusOutline = ({ className }) => {
  return <PlusIconO className={className} />;
};

export const Send = ({ className }) => {
  return <PaperAirplaneIcon className={className} />;
};

export const XMark = ({ className }) => {
  return <XMarkIcon className={className} />;
};

export const ArrowSendOut= ({ className }) => {
  return <ArrowTopRightOnSquareIcon className={className} />;
};

export const VerticalThreeDots = ({ className }) => {
  return <EllipsisVerticalIcon  className={className} />;
};
