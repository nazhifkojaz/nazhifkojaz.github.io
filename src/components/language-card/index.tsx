import { skeleton } from '../../utils';
import { SanitizedLanguage } from '../../interfaces/sanitized-config';

type LanguageCardProps = {
  loading: boolean;
  languages?: SanitizedLanguage[];
};

const LanguageCard = ({ loading, languages = [] }: LanguageCardProps) => {
  // Optional: hide the whole card when empty and not loading
  if (!loading && languages.length === 0) return null;

  const renderSkeleton = () =>
    [1, 2, 3].map((i) => (
      <div key={i} className="mb-2">
        {skeleton({ widthCls: 'w-40', heightCls: 'h-4', className: 'rounded' })}
      </div>
    ));

  return (
    <div className="card shadow-lg card-sm bg-base-100" aria-busy={loading}>
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8'})
            ) : (
              <span className="text-base-content opacity-70">Languages</span>
            )}
          </h5>
        </div>

        <div className="p-3">
           {loading ? (
             renderSkeleton()
           ) : (
             <ul className="space-y-1 text-sm text-base-content">
               {languages.map((lang) => {
                 const level = lang.level?.trim();
                 return (
                   <li key={lang.name}>
                     <span className="font-semibold">{lang.name}</span>
                     {level ? `: ${level}` : null}
                   </li>
                 );
               })}
             </ul>
           )}
         </div>
      </div>
    </div>
    // <div className="card shadow-lg card-sm bg-base-100" aria-busy={loading}>
    //   <div className="card-body">
    //     <h5 className="card-title text-base-content opacity-70">Languages</h5>
    //     <div className="mt-2 text-left">
    //       {loading ? (
    //         renderSkeleton()
    //       ) : (
    //         <ul className="space-y-1 text-sm text-base-content">
    //           {languages.map((lang) => {
    //             const level = lang.level?.trim();
    //             return (
    //               <li key={lang.name}>
    //                 <span className="font-semibold">{lang.name}</span>
    //                 {level ? ` — ${level}` : null}
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default LanguageCard;
