using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.WebApi.Extensions
{
    public static class LoggerExtensions
    {
        private static readonly Action<ILogger, string, Exception> _quoteAdded;

        static LoggerExtensions()
        {
            _quoteAdded = LoggerMessage.Define<string>(
                LogLevel.Information,
                new EventId(2, nameof(ItemAdded)),
                "Quote added (Quote = '{Quote}')");
        }
        private static Action<ILogger, Exception> _logInfo;
        public static void ItemAdded(this ILogger logger, string message)
        {
            _quoteAdded(logger, message, null);
        }
    }
}
