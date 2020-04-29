using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EmailServiceApp.Models;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EmailServiceApp.Controllers
{
    [Route("api/[controller]")]
    public class EmailServiceController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Email email)
        {
            var message = new MimeMessage();

            message.From.Add(new MailboxAddress("Derien", "derienthedev@outlook.com"));
            message.To.Add(new MailboxAddress(email.ToName, email.ToEmail));
            message.Subject = email.Subject;

            message.Body = new TextPart("plain")
            {
                Text = email.Body
            };

            using (var client = new SmtpClient())
            {
                client.Connect("smtp.outlook.com", 587, false);
                client.Authenticate("derienthedev@outlook.com", "DEtroit313..");
                client.Send(message);
                client.Disconnect(true);

            }


        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
