﻿using System;
namespace EmailServiceApp.Models
{
    public class Email
    {
        public string ToName { get; set; }
        public string ToEmail { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }

    }
}
