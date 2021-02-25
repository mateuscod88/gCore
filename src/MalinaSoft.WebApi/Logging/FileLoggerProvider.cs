using Microsoft.Extensions.Logging;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.WebApi.Logging
{
    public class FileLoggerProvider : ILoggerProvider
    {
        private readonly FileLoggerConfiguration _config;
        private readonly ConcurrentDictionary<string, FileLogger> _loggers =
            new ConcurrentDictionary<string, FileLogger>();
        public FileLoggerProvider(FileLoggerConfiguration config) =>
            _config = config;

        public ILogger CreateLogger(string categoryName) => 
            _loggers.GetOrAdd(categoryName, name => new FileLogger(name, _config));


        public void Dispose() => _loggers.Clear();
    }
}
