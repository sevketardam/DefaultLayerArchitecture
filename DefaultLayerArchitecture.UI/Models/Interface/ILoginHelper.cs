using DefaultLayerArchitecture.Core.InputModel.Login;

namespace DefaultLayerArchitecture.UI.Models.Interface;

public interface ILoginHelper
{
    Task<object> Login(LoginInputModel loginInputModel);
}
