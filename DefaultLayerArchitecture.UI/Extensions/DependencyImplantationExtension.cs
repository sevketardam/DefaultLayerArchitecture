using DefaultLayerArchitecture.DatabaseEntitiesDal.Concrete;
using DefaultLayerArchitecture.DatabaseEntitiesDal.Interfaces;
using DefaultLayerArchitecture.UI.Models.Interface;
using DefaultLayerArchitecture.UI.Models.Transaction;

namespace DefaultLayerArchitecture.UI.Extensions;

public static class DependencyImplantationExtension
{
    public static void DbImplantation(this IServiceCollection service)
    {
        service.AddScoped<IUsersDal, UsersDal>();

    }

    public static void HelperImplantation(this IServiceCollection service)
    {
        service.AddScoped<ILoginHelper, LoginHelper>();
    }
}
