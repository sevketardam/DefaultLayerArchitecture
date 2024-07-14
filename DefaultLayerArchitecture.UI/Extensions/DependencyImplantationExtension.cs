using DefaultLayerArchitecture.DatabaseEntitiesDal.Concrete;
using DefaultLayerArchitecture.DatabaseEntitiesDal.Interfaces;

namespace DefaultLayerArchitecture.UI.Extensions;

public static class DependencyImplantationExtension
{
    public static void DbImplantation(this IServiceCollection service)
    {
        service.AddScoped<IUsersDal, UsersDal>();

    }

    public static void HelperImplantation(this IServiceCollection service)
    {

    }
}
