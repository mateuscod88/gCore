using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.WebApi.Logging
{
    public class FileLogger : ILogger
    {
        private readonly string _name;
        private readonly FileLoggerConfiguration _config;
        public FileLogger(
            string name,
            FileLoggerConfiguration config) => (_name, _config) = (name, config);
        public IDisposable BeginScope<TState>(TState state) => default;

        public bool IsEnabled(LogLevel logLevel) =>
              logLevel >= _config.LogLevel;

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            if (!IsEnabled(logLevel))
            {
                return;
            }

            if (_config.EventId == 0 || _config.EventId == eventId.Id)
            {
                var currentDate = DateTime.Now;
                var path = $"{currentDate.Day}-{currentDate.Month}-{currentDate.Year}.txt";
                using (StreamWriter sw = File.AppendText(path))
                    sw.WriteLine($"[{DateTime.Now}][{eventId.Id,2}: {logLevel,-12}] {_name} - {formatter(state, exception)}");

                //ConsoleColor originalColor = Console.ForegroundColor;

                //Console.ForegroundColor = _config.Color;
                //Console.WriteLine($"[{eventId.Id,2}: {logLevel,-12}]");

                //Console.ForegroundColor = originalColor;
                //Console.WriteLine($"{_name} - {formatter(state, exception)}");
            }
        }
    }
}
