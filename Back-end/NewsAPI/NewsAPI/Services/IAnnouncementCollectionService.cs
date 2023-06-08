using NewsAPI.Models;

namespace NewsAPI.Services
{
    public interface IAnnouncementCollectionService : ICollectionService<Announcement>
    {
        public Task<List<Announcement>> GetAnnouncementsByCategoryId(string categoryId);
    }
}
