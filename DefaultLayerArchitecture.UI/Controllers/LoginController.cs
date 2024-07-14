using DefaultLayerArchitecture.Core.InputModel.Login;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using DefaultLayerArchitecture.UI.Models.Interface;

namespace DefaultLayerArchitecture.UI.Controllers;

public class LoginController(ILoginHelper loginHelper) : Controller
{
    [HttpGet("login")]
    public IActionResult Index()
    {
        return View();
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginInputModel loginInputModel) 
        => Ok(await loginHelper.Login(loginInputModel).ConfigureAwait(false));

    [HttpGet("logout")]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync();
        return Redirect("/login");
    }

}
