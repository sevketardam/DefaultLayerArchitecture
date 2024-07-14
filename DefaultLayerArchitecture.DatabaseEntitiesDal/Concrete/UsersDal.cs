using DefaultLayerArchitecture.DatabaseEntities.Context;
using DefaultLayerArchitecture.DatabaseEntities.Entities;
using DefaultLayerArchitecture.DatabaseEntitiesDal.Interfaces;
using DefaultLayerArchitecture.EF;

namespace DefaultLayerArchitecture.DatabaseEntitiesDal.Concrete;

public class UsersDal(AppDbContext context) : EfRepo<AppDbContext, Users>(context), IUsersDal
{
    public void Dispose()
    {

    }
}