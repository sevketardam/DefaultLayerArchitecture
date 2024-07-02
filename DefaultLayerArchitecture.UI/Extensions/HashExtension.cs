using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

namespace DefaultLayerArchitecture.UI.Extensions;

public static class HashExtension
{

    private static IConfiguration? _configuration;

    public static void Initialize(IConfiguration? configuration)
    {
        _configuration = configuration;
    }

    public static string ConvertHash(this string text)
    {
        var salt = Encoding.ASCII.GetBytes(_configuration?["Security:Salt"] ?? "");

        return Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: text!,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8));
    }
}