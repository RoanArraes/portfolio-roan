import {
  Container,
  Icon
} from './styles';

type Props = {
  icon?: string,
  label: string,
  url: string,
  targetUrl: string
  className?: string
  rotation?: string,
  margin?: string
}

const LinkWithIcon = ({ 
  icon,
  label,
  url,
  targetUrl,
  className,
  rotation,
  margin 
}: Props) => {
  return(
    <Container
      className={className}
      rotation={rotation}
      margin={margin}
    >
      {icon && 
        <Icon
          img={icon}
        />
      }
      {(url && label) && 
        <a 
          href={url}
          target={targetUrl}
        >
          {label}
        </a>
      }
    </Container>
  );
}

export default LinkWithIcon;