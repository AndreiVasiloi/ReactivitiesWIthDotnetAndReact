using System.Runtime.InteropServices;

namespace Application.Core;

public class AppException
{
    public AppException(int statusCode, string message, [Optional]string details)
    {
        StatusCode = statusCode;
        Message = message;
        Details = details;
    }
    public int StatusCode { get; set; }
    public string Message { get; set; }
    public string Details { get; set; }
}