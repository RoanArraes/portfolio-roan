import {
  MenuArea,
  ExternalCircle,
  Wrapper,
  WrapperCenter,
  WrapperMenuVertical
} from "./styles";

import {
  ImageRounded,
  LinkWithIcon
} from '../';

import {
  LABEL_MENU_OPTIONS
} from '../../utils/labels';

const MenuCircle = () => {
  return(
    <MenuArea>
      <Wrapper
        className="menu-circle__wrapper-label-left"
      >
        <LinkWithIcon
          className="wrapper__label-link"
          label={LABEL_MENU_OPTIONS[0].label}
          url={LABEL_MENU_OPTIONS[0].url}
          icon={LABEL_MENU_OPTIONS[0].icon}
          targetUrl={LABEL_MENU_OPTIONS[0].targetUrl}
          margin="0 40px 0 0"
          useRouter
        />
      </Wrapper>
      <WrapperCenter>
        <LinkWithIcon
          className="wrapper__label-link wrapper-top-bottom__label-top-rotated"
          label={LABEL_MENU_OPTIONS[1].label}
          url={LABEL_MENU_OPTIONS[1].url}
          icon={LABEL_MENU_OPTIONS[1].icon}
          targetUrl={LABEL_MENU_OPTIONS[1].targetUrl}
          margin="0 0 100px 0"
          rotation="-90"
          useExternalLink
        />
        <ExternalCircle
          className="wrapper-top-bottom__external-circle"
        >
          <ImageRounded />
        </ExternalCircle>
        <LinkWithIcon
          className="wrapper__label-link wrapper-top-bottom__label-bottom-rotated"
          label={LABEL_MENU_OPTIONS[2].label}
          url={LABEL_MENU_OPTIONS[2].url}
          icon={LABEL_MENU_OPTIONS[2].icon}
          targetUrl={LABEL_MENU_OPTIONS[2].targetUrl}
          margin="100px 0 0 0"
          rotation="90"
          useRouter
        />
        <WrapperMenuVertical
          className="wrapper-top-bottom__wrapper-menu-vertical"
        >
        <LinkWithIcon
          className="wrapper__label-link"
          label={LABEL_MENU_OPTIONS[3].label}
          url={LABEL_MENU_OPTIONS[3].url}
          targetUrl={LABEL_MENU_OPTIONS[3].targetUrl}
          icon={LABEL_MENU_OPTIONS[3].icon}
          margin="0 0 5px 0"
          useExternalLink
        />
        <LinkWithIcon
          className="wrapper__label-link"
          label={LABEL_MENU_OPTIONS[0].label}
          url={LABEL_MENU_OPTIONS[0].url}
          targetUrl={LABEL_MENU_OPTIONS[0].targetUrl}
          margin="0 0 5px 0"
          useRouter
        />
        <LinkWithIcon
          className="wrapper__label-link"
          label={LABEL_MENU_OPTIONS[1].label}
          url={LABEL_MENU_OPTIONS[1].url}
          targetUrl={LABEL_MENU_OPTIONS[1].targetUrl}
          margin="0 0 5px 0"
          useExternalLink
        />
        <LinkWithIcon
          className="wrapper__label-link"
          label={LABEL_MENU_OPTIONS[2].label}
          url={LABEL_MENU_OPTIONS[2].url}
          targetUrl={LABEL_MENU_OPTIONS[2].targetUrl}
          margin="0 0 5px 0"
          useRouter
        />
        </WrapperMenuVertical>
      </WrapperCenter>
      <Wrapper
        className="menu-circle__wrapper-label-rigth"
      >
        <LinkWithIcon
          className="wrapper__label-link wrapper-top-bottom__label-top-rotated"
          label={LABEL_MENU_OPTIONS[3].label}
          url={LABEL_MENU_OPTIONS[3].url}
          icon={LABEL_MENU_OPTIONS[3].icon}
          targetUrl={LABEL_MENU_OPTIONS[3].targetUrl}
          margin="0 0 0 40px"
          useExternalLink
        />
      </Wrapper>
    </MenuArea>
  )
}

export default MenuCircle;