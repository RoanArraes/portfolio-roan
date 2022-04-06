import { Link } from 'react-router-dom';
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
  useRouter?: boolean
  useExternalLink?: boolean
}

const LinkWithIcon = ({ 
  icon,
  label,
  url,
  useRouter,
  useExternalLink,
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
      {(url && label && useExternalLink && !useRouter) && 
        <a 
          href={url}
          target={targetUrl}
        >
          {label}
        </a>
      }
      {(url && label && useRouter && !useExternalLink) && 
        <Link
          to={url}
        >
          {label}
        </Link>
      }
    </Container>
  );
}

export default LinkWithIcon;