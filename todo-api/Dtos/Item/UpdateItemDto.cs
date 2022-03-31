using System;
using System.ComponentModel.DataAnnotations;

namespace ToDoApi.Dtos.Item
{
    public record UpdateItemDto
    {
        [Required]
        [MaxLength(50)]
        public string? Title { get; init; }
        public string? Description { get; init; }

        [Required]
        public DateTimeOffset CompleteUntil { get; init; }
    }
}