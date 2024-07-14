using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using DefaultLayerArchitecture.Core.Extensions;
using DefaultLayerArchitecture.Core.InputModel.Login;
using DefaultLayerArchitecture.DatabaseEntitiesDal.Interfaces;
using DefaultLayerArchitecture.UI.Models.Interface;

namespace DefaultLayerArchitecture.UI.Models.Transaction;

public class LoginHelper(IUsersDal userDal, IHttpContextAccessor httpContext) : ILoginHelper
{
    public async Task<object> Login(LoginInputModel loginInputModel)
    {
        ArgumentNullException.ThrowIfNull(httpContext.HttpContext);
        
        var hashPass = loginInputModel.Password.ConvertHash();
        var checkCompany = userDal.SelectByFunc(a => a.Password == hashPass && a.UserName == loginInputModel.UserName).FirstOrDefault();
        var guid = Guid.NewGuid();
        if (checkCompany == null)
        {
            return new
            {
                Message = "Kullanıcı bulunamadı",
                Result = 2
            };
        }

        var userIdentity = new ClaimsIdentity(new List<Claim>()
        {
            new Claim(ClaimTypes.Role,checkCompany.UserType),
            new Claim(ClaimTypes.Sid,checkCompany.Id.ToString())
        }, "Authorization");
        var pri = new ClaimsPrincipal(userIdentity);


        await httpContext.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, pri);

        return new
        {
            Message = "Başarıyla giriş yapıldı",
            Result = 1
        };
    }
}
