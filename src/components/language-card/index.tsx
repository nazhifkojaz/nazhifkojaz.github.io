import React from 'react';
import { skeleton } from '../../utils';

interface Language {
  name: string;
  level: string;
}

interface LanguageCardProps {
  loading: boolean;
  languages?: Language[];
}

const LanguageCard = ({ loading, languages = [] }: LanguageCardProps) => {
  const renderSkeleton = () =>
    [1, 2, 3].map((i) => (
      <div key={i} className="mb-2">
        {skeleton({
          widthCls: 'w-40',
          heightCls: 'h-4',
          className: 'rounded',
        })}
      </div>
    ));

  return (
    <div className="card shadow-lg card-sm bg-base-100">
      <div className="card-body p-4">
        <h5 className="card-title text-base-content opacity-70">Languages</h5>
        <div className="mt-2 text-left">
          {loading ? (
            renderSkeleton()
          ) : languages.length > 0 ? (
            <ul className="space-y-1 text-sm text-base-content">
              {languages.map((lang, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{lang.name}</span>
                  {lang.level && ` — ${lang.level}`}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-base-content/60 italic">No languages listed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageCard;
