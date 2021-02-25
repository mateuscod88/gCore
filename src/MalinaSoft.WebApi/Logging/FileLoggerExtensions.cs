using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.WebApi.Logging
{
    public static class FileLoggerExtensions
    {
        public static ILoggingBuilder AddFileLogger(
       this ILoggingBuilder builder) =>
       builder.AddFileLogger(
           new FileLoggerConfiguration());

        public static ILoggingBuilder AddFileLogger(
            this ILoggingBuilder builder,
            Action<FileLoggerConfiguration> configure)
        {
            var config = new FileLoggerConfiguration();
            configure(config);

            return builder.AddFileLogger(config);
        }

        public static ILoggingBuilder AddFileLogger(
            this ILoggingBuilder builder,
            FileLoggerConfiguration config)
        {
            builder.AddProvider(new FileLoggerProvider(config));
            return builder;
        }
    }
}
