using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace StringCutterKata.Tests
{
    public static class TestAssertionExtensions
    {
        public static void ShouldBe(this object actual, object expected)
        {
            Assert.AreEqual(expected, actual);
        }

        public static void ShouldNotBe(this object actual, object notExpected)
        {
            Assert.AreNotEqual(notExpected, actual);
        }

        public static void ShouldBeEmpty<T>(this IEnumerable<T> expected)
        {
            Assert.IsTrue(expected.Count() == 0);
        }
    }
}