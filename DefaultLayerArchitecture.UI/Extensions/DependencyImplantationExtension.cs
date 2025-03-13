using DefaultLayerArchitecture.DatabaseEntities.Context;
using DefaultLayerArchitecture.DatabaseEntities.Entities;
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

    public static void AddFirstUser(this IServiceProvider service)
    {
        using (var scope = service.CreateScope())
        {
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            if (!context.Users.Any())
            {
                context.Users.Add(new Users
                {
                    Id = Guid.NewGuid(),
                    Password = "",
                    UserName = "admin",
                    UserType = "admin",
                    CreatedDate = new DateTime(2024, 1, 1, 12, 0, 0),
                });
                context.SaveChanges();
            }
        }
    }
}
