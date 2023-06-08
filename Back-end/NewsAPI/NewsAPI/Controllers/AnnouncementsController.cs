using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewsAPI.Models;
using NewsAPI.Services;
using System.ComponentModel.DataAnnotations;

namespace NewsAPI.Controllers
{
    [Route("Announcement")]
    [ApiController]
    public class AnnouncementsController : ControllerBase
    {
        IAnnouncementCollectionService _announcementCollectionService;

        public AnnouncementsController(IAnnouncementCollectionService announcementCollectionService)
        {
            _announcementCollectionService = announcementCollectionService ?? throw new ArgumentNullException(nameof(AnnouncementCollectionService));
        }

        [HttpGet]
        public async Task<IActionResult> GetAnnouncements()
        {
            return Ok(await _announcementCollectionService.GetAll());
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetAnnouncementById(Guid Id)
        {
            var announcement = await _announcementCollectionService.Get(Id);

            if(announcement == null)
            {
                return NotFound("Announcement not found!");
            }

            return Ok(announcement);
        }

        //[HttpGet("get_by_categoryId/{categoryId}")]
        //public async Task<IActionResult> GetAnnouncementByCategoryId(string categoryId)
        //{
        //    var announcements = await _announcementCollectionService.GetAnnouncementsByCategoryId(categoryId);

        //    return Ok(announcements);
        //}


        [HttpPost]
        public async Task<IActionResult> CreateAnnouncement([FromBody] Announcement announcement)
        {
            if (announcement == null)
            {
                return BadRequest("Announcement is empty!");
            }

            var isCreated = await _announcementCollectionService.Create(announcement);

            return CreatedAtAction(nameof(GetAnnouncementById), new { id = announcement.Id }, announcement);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAnnouncement([Required] Guid Id, [FromBody]Announcement announcement)
        {
            var isUpdated = await _announcementCollectionService.Update(Id, announcement);

            if (!isUpdated)
            {
                return NotFound("Announcement is empty!");
            }

            return Ok(isUpdated);
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> DeleteAnnouncementAsync([Required] Guid Id)
        {
            var isDeleted = await _announcementCollectionService.Delete(Id);

            if (!isDeleted)
            {
                return NotFound("Announcement not found!");
            }

            return Ok();
        }

        ///// <summary>
        ///// Dummy Get
        ///// </summary>
        //[HttpGet]
        //public IActionResult GetDummy()
        //{
        //    return Ok("OK");
        //}

        ///// <summary>
        ///// Dummy Put
        ///// </summary>
        //[HttpPut]
        //public IActionResult PutDummy()
        //{
        //    return Ok("PUT");
        //}

        ///// <summary>
        ///// Dummy Post
        ///// </summary>
        //[HttpPost]
        //public IActionResult PostDummy()
        //{
        //    return Ok("POSTED");
        //}

        ///// <summary>
        ///// Dummy Delete
        ///// </summary>
        ///// <param name="id"></param>
        //[HttpDelete]
        //public IActionResult DeleteDummy(string id)
        //{
        //    return Ok("DELETED");
        //}
    }
}
