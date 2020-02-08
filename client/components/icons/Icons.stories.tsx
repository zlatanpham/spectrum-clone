import { storiesOf } from '@storybook/react';
import React from 'react';

import IconAnalytics from './IconAnalytics';
import IconAttachment from './IconAttachment';
import IconBug from './IconBug';
import IconBugFill from './IconBugFill';
import IconChannel from './IconChannel';
import IconChannelPrivate from './IconChannelPrivate';
import IconCheckbox from './IconCheckbox';
import IconCheckmark from './IconCheckmark';
import IconCode from './IconCode';
import IconCommunity from './IconCommunity';
import IconControls from './IconControls';
import IconDelete from './IconDelete';
import IconDoorEnter from './IconDoorEnter';
import IconDoorLeave from './IconDoorLeave';
import IconDown from './IconDown';
import IconDownCaret from './IconDownCaret';
import IconDownFill from './IconDownFill';
import IconDownload from './IconDownload';
import IconEdit from './IconEdit';
import IconEmail from './IconEmail';
import IconEmailFill from './IconEmailFill';
import IconEmbed from './IconEmbed';
import IconEmoji from './IconEmoji';
import IconEnter from './IconEnter';
import IconEverything from './IconEverything';
import IconExpand from './IconExpand';
import IconExplore from './IconExplore';
import IconFacebook from './IconFacebook';
import IconFill from './IconFill';
import IconFlag from './IconFlag';
import IconFlagFill from './IconFlagFill';
import IconFreeze from './IconFreeze';
import IconFriend from './IconFriend';
import IconGithub from './IconGithub';
import IconGoogle from './IconGoogle';
import IconHome from './IconHome';
import IconIdea from './IconIdea';
import IconInfo from './IconInfo';
import IconInserter from './IconInserter';
import IconLike from './IconLike';
import IconLink from './IconLink';
import IconLogo from './IconLogo';
import IconMarkdown from './IconMarkdown';
import IconMemberAdd from './IconMemberAdd';
import IconMemberRemove from './IconMemberRemove';
import IconMention from './IconMention';
import IconMenu from './IconMenu';
import IconMessage from './IconMessage';
import IconMessageNew from './IconMessageNew';
import IconMessageSimple from './IconMessageSimple';
import IconMessageSimpleFill from './IconMessageSimpleFill';
import IconMessageSimpleNew from './IconMessageSimpleNew';
import IconMinus from './IconMinus';
import IconMinusFill from './IconMinusFill';
import IconMute from './IconMute';
import IconNotification from './IconNotification';
import IconNotificationFIll from './IconNotificationFIll';
import IconPerson from './IconPerson';
import IconPhoto from './IconPhoto';
import IconPhotoFill from './IconPhotoFill';
import IconPin from './IconPin';
import IconPinFill from './IconPinFill';
import IconPlus from './IconPlus';
import IconPlusFill from './IconPlusFill';
import IconPost from './IconPost';
import IconPostCancel from './IconPostCancel';
import IconPostFill from './IconPostFill';
import IconPrivate from './IconPrivate';
import IconPrivateFill from './IconPrivateFill';
import IconPrivateOutline from './IconPrivateOutline';
import IconPrivateUnlocked from './IconPrivateUnlocked';
import IconProductHunt from './IconProductHunt';
import IconProfile from './IconProfile';
import IconProfileFill from './IconProfileFill';
import IconQuote from './IconQuote';
import IconRep from './IconRep';
import IconReply from './IconReply';
import IconSam from './IconSam';
import IconSearch from './IconSearch';
import IconSend from './IconSend';
import IconSendFill from './IconSendFill';
import IconSettings from './IconSettings';
import IconShare from './IconShare';
import IconSupport from './IconSupport';
import IconSupportFill from './IconSupportFill';
import IconThread from './IconThread';
import IconThumbsdown from './IconThumbsdown';
import IconThumbsdownFill from './IconThumbsdownFill';
import IconThumbsup from './IconThumbsup';
import IconThumbsupFill from './IconThumbsupFill';
import IconTwitter from './IconTwitter';
import IconUp from './IconUp';
import IconUpCaret from './IconUpCaret';
import IconUpFill from './IconUpFill';
import IconUpload from './IconUpload';
import IconView from './IconView';
import IconViewBack from './IconViewBack';
import IconViewClose from './IconViewClose';
import IconViewCloseSmall from './IconViewCloseSmall';
import IconViewFill from './IconViewFill';
import IconViewForward from './IconViewForward';
import IconViewReload from './IconViewReload';
import IconWelcome from './IconWelcome';

const icons = [
  [IconAnalytics, 'IconAnalytics'],
  [IconAttachment, 'IconAttachment'],
  [IconBug, 'IconBug'],
  [IconBugFill, 'IconBugFill'],
  [IconChannel, 'IconChannel'],
  [IconChannel, '  IconChannel'],
  [IconChannelPrivate, 'IconChannelPrivate'],
  [IconCheckbox, 'IconCheckbox'],
  [IconCheckmark, 'IconCheckmark'],
  [IconCode, 'IconCode'],
  [IconCommunity, 'IconCommunity'],
  [IconControls, 'IconControls'],
  [IconDelete, 'IconDelete'],
  [IconDoorEnter, 'IconDoorEnter'],
  [IconDoorLeave, 'IconDoorLeave'],
  [IconDown, 'IconDown'],
  [IconDownCaret, 'IconDownCaret'],
  [IconDownFill, 'IconDownFill'],
  [IconDownload, 'IconDownload'],
  [IconEdit, 'IconEdit'],
  [IconEmail, 'IconEmail'],
  [IconEmailFill, 'IconEmailFill'],
  [IconEmbed, 'IconEmbed'],
  [IconEmoji, 'IconEmoji'],
  [IconEnter, 'IconEnter'],
  [IconEverything, 'IconEverything'],
  [IconExpand, 'IconExpand'],
  [IconExplore, 'IconExplore'],
  [IconFacebook, 'IconFacebook'],
  [IconFill, 'IconFill'],
  [IconFlag, 'IconFlag'],
  [IconFlagFill, 'IconFlagFill'],
  [IconFreeze, 'IconFreeze'],
  [IconFriend, 'IconFriend'],
  [IconGithub, 'IconGithub'],
  [IconGoogle, 'IconGoogle'],
  [IconHome, 'IconHome'],
  [IconIdea, 'IconIdea'],
  [IconInfo, 'IconInfo'],
  [IconInserter, 'IconInserter'],
  [IconLike, 'IconLike'],
  [IconLink, 'IconLink'],
  [IconLogo, 'IconLogo'],
  [IconMarkdown, 'IconMarkdown'],
  [IconMemberAdd, 'IconMemberAdd'],
  [IconMemberRemove, 'IconMemberRemove'],
  [IconMention, 'IconMention'],
  [IconMenu, 'IconMenu'],
  [IconMessage, 'IconMessage'],
  [IconMessageNew, 'IconMessageNew'],
  [IconMessageSimple, 'IconMessageSimple'],
  [IconMessageSimpleFill, 'IconMessageSimpleFill'],
  [IconMessageSimpleNew, 'IconMessageSimpleNew'],
  [IconMinus, 'IconMinus'],
  [IconMinusFill, 'IconMinusFill'],
  [IconMute, 'IconMute'],
  [IconNotification, 'IconNotification'],
  [IconNotificationFIll, 'IconNotificationFIll'],
  [IconPerson, 'IconPerson'],
  [IconPhoto, 'IconPhoto'],
  [IconPhotoFill, 'IconPhotoFill'],
  [IconPin, 'IconPin'],
  [IconPinFill, 'IconPinFill'],
  [IconPlus, 'IconPlus'],
  [IconPlusFill, 'IconPlusFill'],
  [IconPost, 'IconPost'],
  [IconPostCancel, 'IconPostCancel'],
  [IconPostFill, 'IconPostFill'],
  [IconPrivate, 'IconPrivate'],
  [IconPrivateFill, 'IconPrivateFill'],
  [IconPrivateOutline, 'IconPrivateOutline'],
  [IconPrivateUnlocked, 'IconPrivateUnlocked'],
  [IconProductHunt, 'IconProductHunt'],
  [IconProfile, 'IconProfile'],
  [IconProfileFill, 'IconProfileFill'],
  [IconQuote, 'IconQuote'],
  [IconRep, 'IconRep'],
  [IconReply, 'IconReply'],
  [IconSam, 'IconSam'],
  [IconSearch, 'IconSearch'],
  [IconSend, 'IconSend'],
  [IconSendFill, 'IconSendFill'],
  [IconSettings, 'IconSettings'],
  [IconShare, 'IconShare'],
  [IconSupport, 'IconSupport'],
  [IconSupportFill, 'IconSupportFill'],
  [IconThread, 'IconThread'],
  [IconThumbsdown, 'IconThumbsdown'],
  [IconThumbsdownFill, 'IconThumbsdownFill'],
  [IconThumbsup, 'IconThumbsup'],
  [IconThumbsupFill, 'IconThumbsupFill'],
  [IconTwitter, 'IconTwitter'],
  [IconUp, 'IconUp'],
  [IconUpCaret, 'IconUpCaret'],
  [IconUpFill, 'IconUpFill'],
  [IconUpload, 'IconUpload'],
  [IconView, 'IconView'],
  [IconViewBack, 'IconViewBack'],
  [IconViewClose, 'IconViewClose'],
  [IconViewCloseSmall, 'IconViewCloseSmall'],
  [IconViewFill, 'IconViewFill'],
  [IconViewForward, 'IconViewForward'],
  [IconViewReload, 'IconViewReload'],
  [IconWelcome, 'IconWelcome'],
];

storiesOf('components/Icons', module).add('All icons', () => (
  <div className="flex flex-wrap">
    {icons.map(([Icon, displayName], index) => (
      <div
        key={index}
        className="w-1/6 flex items-center flex-col border-b border-r py-4"
      >
        <Icon />
        <div>
          <code className="bg-gray-300 text-sm px-2 py-1 rounded mt-3 inline-block">{`<${displayName} />`}</code>
        </div>
      </div>
    ))}
  </div>
));
