from django.http import JsonResponse
from django.db import connection
from django.db.utils import OperationalError


def health(_request):
    """Report that the API process and its database connection are available."""
    try:
        connection.ensure_connection()
    except OperationalError:
        return JsonResponse(
            {"status": "unavailable", "service": "music-sheet-library-api"},
            status=503,
        )

    return JsonResponse({"status": "ok", "service": "music-sheet-library-api"})
