using System;
using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace StringCutterKata.Tests
{
    public class StringCutterTests
    {
        [TestClass]
        public class When_cutting_an_empty_string
        {
            [TestMethod]
            public void Then_the_result_should_be_empty()
            {
                var stringCutter = new StringCutter("");

                var result = stringCutter.CutToArray();

                result.ShouldBeEmpty();
            }
        }

        [TestClass]
        public class When_cutting_a_single_character_string
        {
            [TestMethod]
            public void Then_the_result_should_be_the_single_character()
            {
                var stringCutter = new StringCutter("a");

                var result = stringCutter.CutToArray();

                result.Length.ShouldBe(1);
                result[0].ShouldBe("a");
            }
        }

        [TestClass]
        public class When_cutting_a_multi_character_string
        {
            [TestMethod]
            public void Then_the_result_should_be_an_array_of_progressively_chopped_strings()
            {
                var stringCutter = new StringCutter("hello");

                var result = stringCutter.CutToArray();

                result.Length.ShouldBe(5);
                result[0].ShouldBe("hello");
                result[1].ShouldBe("hell");
                result[2].ShouldBe("hel");
                result[3].ShouldBe("he");
                result[4].ShouldBe("h");
            }
        }

        [TestClass]
        public class When_cutting_a_string_and_printing_to_the_console
        {
            private TextWriter originalConsole;
            private TextWriter fakeConsole;

            [TestInitialize]
            public void Setup()
            {
                originalConsole = Console.Out;
                fakeConsole = new StringWriter();
                Console.SetOut(fakeConsole);
            }

            [TestMethod]
            public void Then_the_results_should_be_printed_to_the_console()
            {
                var stringCutter = new StringCutter("hello");

                stringCutter.CutToConsole();

                var result = fakeConsole.ToString().Split(new[] { Environment.NewLine }, StringSplitOptions.RemoveEmptyEntries);

                result.Length.ShouldBe(5);
                result[0].ShouldBe("hello");
                result[1].ShouldBe("hell");
                result[2].ShouldBe("hel");
                result[3].ShouldBe("he");
                result[4].ShouldBe("h");
            }

            [TestCleanup]
            public void Cleanup()
            {
                Console.SetOut(originalConsole);
            }
        }
    }
}
