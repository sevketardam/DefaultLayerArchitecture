using DefaultLayerArchitecture.Data;
using DefaultLayerArchitecture.DatabaseEntities.Entities;

namespace DefaultLayerArchitecture.DatabaseEntitiesDal.Interfaces;

public interface IUsersDal : ISelectableRepo<Users>, IEInsertableRepo<Users>, IUpdatetableRepo<Users>, IDeletableRepo<Users>, IDisposable
{

}