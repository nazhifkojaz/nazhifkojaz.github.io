import { skeleton } from '../../utils';
import { SanitizedSkillCategory } from '../../interfaces/sanitized-config';

type SkillCardProps = {
  loading: boolean;
  skills?: SanitizedSkillCategory[];
};

const SkillCard = ({ loading, skills = [] }: SkillCardProps) => {
  // Optional: hide the whole card if empty
  if (!loading && skills.length === 0) return null;

  const renderSkeleton = () =>
    Array.from({ length: 12 }, (_, i) => (
      <div key={i}>
        {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
      </div>
    ));

  return (
    <div className="card shadow-lg card-sm bg-base-100" aria-busy={loading}>
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">Tech Stack</span>
            )}
          </h5>
        </div>

        <div className="p-3">
          {loading ? (
            <div className="flex flex-wrap gap-2">{renderSkeleton()}</div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((group) => (
                <section key={group.category}>
                  <h6 className="font-semibold text-sm mb-2 text-primary">
                    {group.category}
                  </h6>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={`${group.category}:${item}`}
                        className="badge badge-primary badge-sm whitespace-nowrap"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
