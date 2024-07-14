using DefaultLayerArchitecture.DBEntitiesDAL.Concrete;
using DefaultLayerArchitecture.DBEntitiesDAL.Interfaces;

namespace DefaultLayerArchitecture.UI.Extensions;

public static class DependencyImplantationExtension
{
    public static void DbImplantation(this IServiceCollection service)
    {
        service.AddScoped<IDefaultDal, DefaultDal>();

    }

    public static void HelperImplantation(this IServiceCollection service)
    {

    }
}
