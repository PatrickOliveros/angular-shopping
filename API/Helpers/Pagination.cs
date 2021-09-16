using System.Collections.Generic;

namespace API.Helpers
{
    public class Pagination<T> where T: class
    {
        public Pagination(int pageIndex, int pageSize, int count, IReadOnlyList<T> results)
        {
            Pageindex = pageIndex;
            PageSize = pageSize;
            Count = count;
            Results = results;
        }

        public int Pageindex { get; set; }
        public int PageSize { get; set; }
        public int Count { get; set; }
        public IReadOnlyList<T> Results { get; set; }
    }
}
