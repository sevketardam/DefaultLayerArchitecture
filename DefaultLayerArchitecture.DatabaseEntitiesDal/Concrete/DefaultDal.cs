using DefaultLayerArchitecture.DatabaseEntities.Context;
using DefaultLayerArchitecture.DatabaseEntities.Entities;
using DefaultLayerArchitecture.DBEntitiesDAL.Interfaces;
using DefaultLayerArchitecture.EF;

namespace DefaultLayerArchitecture.DBEntitiesDAL.Concrete;

public class DefaultDal(AppDbContext context) : EfRepo<AppDbContext, Default>(context), IDefaultDal
{
    public void Dispose()
    {

    }
}