using DefaultLayerArchitecture.Data;
using DefaultLayerArchitecture.DatabaseEntities.Entities;

namespace DefaultLayerArchitecture.DBEntitiesDAL.Interfaces;

public interface IDefaultDal : ISelectableRepo<Default>, IEInsertableRepo<Default>, IUpdatetableRepo<Default>, IDeletableRepo<Default>, IDisposable
{

}