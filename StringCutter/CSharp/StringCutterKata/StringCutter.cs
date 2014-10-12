using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace StringCutterKata
{
    public class StringCutter
    {
        private readonly string _stringToCut;

        public StringCutter(string stringToCut)
        {
            _stringToCut = stringToCut;
        }

        public string[] CutToArray()
        {
            if (string.IsNullOrEmpty(_stringToCut))
                return new string[0];

            var cutStrings = new List<string>();

            for (var i = _stringToCut.Length; i > 0; i--)
            {
                var cutString = _stringToCut.Substring(0, i);
                cutStrings.Add(cutString);
            }

            return cutStrings.ToArray();
        }

        public void CutToConsole()
        {
            foreach (var cutString in CutToArray())
            {
                Console.WriteLine(cutString);
            }
        }
    }
}
