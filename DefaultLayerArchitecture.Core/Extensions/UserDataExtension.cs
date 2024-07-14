using System.Security.Claims;

namespace DefaultLayerArchitecture.Core.Extensions;

public static class UserDataExtension
{
    public static dynamic GetAuthId(this ClaimsPrincipal user)
    {
        return Guid.Parse(user.Claims.Where(a => a.Type == ClaimTypes.Sid).Select(a => a.Value).SingleOrDefault() ?? "0");
    }

    public static dynamic GetUserRole(this ClaimsPrincipal user)
    {
        return user.Claims.Where(a => a.Type == ClaimTypes.Role).Select(a => a.Value).SingleOrDefault() ?? "";
    }
}