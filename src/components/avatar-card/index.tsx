import { FALLBACK_IMAGE } from '../../constants';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';
import { Fragment } from 'react';
import {
  SanitizedGithub,
  SanitizedSocial
} from '../../interfaces/sanitized-config';
import {
  FaDev,
  FaFacebook,
  FaLinkedin,
  FaStackOverflow,
  FaGithub,
  FaInstagram,
  FaMedium,
  FaFileDownload,
  FaKaggle,
} from 'react-icons/fa';
import { 
  SiResearchgate,
  SiX,
} from 'react-icons/si';
import { RiMailFill } from 'react-icons/ri';
import { FaSquareThreads } from 'react-icons/fa6';

interface AvatarCardProps {
  profile: Profile | null;
  loading: boolean;
  avatarRing: boolean;
  resumeFileUrl?: string;
  github: SanitizedGithub,
  social: SanitizedSocial,
}

const ListItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  link?: string;
  skeleton?: boolean;
}> = ({ icon, label, link }) => {
  return (
    <div className="inline-block m-2">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-2xl hover:text-primary transition-colors duration-200"
        title={label}
      >
        {icon}
      </a>
    </div>
  );
};

/**
 * Renders an AvatarCard component.
 * @param profile - The profile object.
 * @param loading - A boolean indicating if the profile is loading.
 * @param avatarRing - A boolean indicating if the avatar should have a ring.
 * @param resumeFileUrl - The URL of the resume file.
 * @param github
 * @param social
 * @returns JSX element representing the AvatarCard.
 */
const AvatarCard: React.FC<AvatarCardProps> = ({
  profile,
  loading,
  avatarRing,
  resumeFileUrl,
  github,
  social,
}): React.JSX.Element => {
  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring-3 ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : FALLBACK_IMAGE}
                  alt={profile.name}
                  placeholder={skeleton({
                    widthCls: 'w-full',
                    heightCls: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content font-mono">
            {loading || !profile
              ? skeleton({ widthCls: 'w-48', heightCls: 'h-5' })
              : profile.bio}
          </div>
        </div>
          <div className="text-base-content text-opacity-60 flex flex-wrap justify-center">
          <Fragment>
            <ListItem
              icon={<FaGithub />}
              label="GitHub"
              link={`https://github.com/${github.username}`}
            />
            {social?.researchGate && (
              <ListItem
                icon={<SiResearchgate />}
                label="ResearchGate"
                link={`https://www.researchgate.net/profile/${social.researchGate}`}
              />
            )}
            {social?.kaggle && (
              <ListItem
                icon={< FaKaggle/>}
                label="kaggle"
                link={`https://www.kaggle.com/${social.kaggle}`}
              />
            )}
            {social?.linkedin && (
              <ListItem
              icon={<FaLinkedin />}
              label="LinkedIn"
              link={`https://www.linkedin.com/in/${social.linkedin}`}
              />
            )}
            {social?.facebook && (
              <ListItem
              icon={<FaFacebook />}
              label="Facebook"
              link={`https://www.facebook.com/${social.facebook}`}
              />
            )}
            {social?.x && (
              <ListItem
                icon={<SiX />}
                label="X"
                link={`https://x.com/${social.x}`}
              />
            )}
            {social?.instagram && (
              <ListItem
                icon={<FaInstagram />}
                label="Instagram"
                link={`https://www.instagram.com/${social.instagram}`}
              />
            )}
            {social?.threads && (
              <ListItem
                icon={<FaSquareThreads />}
                label="Threads"
                link={`https://www.threads.net/@${social.threads.replace('@', '')}`}
              />
            )}
            {social?.medium && (
              <ListItem
                icon={<FaMedium />}
                label="Medium"
                link={`https://medium.com/@${social.medium}`}
              />
            )}
            {social?.dev && (
              <ListItem
                icon={<FaDev />}
                label="Dev"
                link={`https://dev.to/${social.dev}`}
              />
            )}
            {social?.stackoverflow && (
              <ListItem
                icon={<FaStackOverflow />}
                label="Stack Overflow"
                link={`https://stackoverflow.com/users/${social.stackoverflow}`}
              />
            )}
            {social?.email && (
              <ListItem
                icon={<RiMailFill />}
                label="Email"
                link={`mailto:${social.email}`}
              />
            )}
            {resumeFileUrl && (
              <ListItem 
                icon={<FaFileDownload />}
                label="Resume Download"
                link={resumeFileUrl}
              />
            )}
          </Fragment>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;
