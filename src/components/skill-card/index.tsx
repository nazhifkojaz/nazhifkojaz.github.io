import { skeleton } from '../../utils';

interface SkillCategory {
  category: string;
  items: string[];
}

const SkillCard = ({
  loading,
  skills,
}: {
  loading: boolean;
  skills: SkillCategory[];
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 12; index++) {
      array.push(
        <div key={index}>
          {skeleton({ widthCls: 'w-16', heightCls: 'h-4', className: 'm-1' })}
        </div>
      );
    }
    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-100">
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
        <div className="p-3 flow-root">
          {loading ? (
            <div className="-m-1 flex flex-wrap justify-start gap-2">
              {renderSkeleton()}
            </div>
          ) : (
            skills.map((skillCategory, idx) => (
              <div key={idx} className="mb-4">
                <h6 className="font-semibold text-sm mb-2 text-primary">
                  {skillCategory.category}
                </h6>
                <div className="-m-1 flex flex-wrap justify-start gap-2">
                  {skillCategory.items.map((item, index) => (
                    <div
                      key={index}
                      className="badge badge-primary badge-sm whitespace-nowrap"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
