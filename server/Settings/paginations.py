from django.conf import settings
from rest_framework import pagination, status
from rest_framework.response import Response


class SupplierPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'p'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data_per_page': self.page.paginator.per_page,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        }, status=status.HTTP_200_OK)


class CourierPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'p'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data_per_page': self.page.paginator.per_page,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        }, status=status.HTTP_200_OK)


class DeliveryTypePagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'p'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data_per_page': self.page.paginator.per_page,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        }, status=status.HTTP_200_OK)


class ClientPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'p'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data_per_page': self.page.paginator.per_page,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        }, status=status.HTTP_200_OK)


class GeneralSettingsPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'p'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data_per_page': self.page.paginator.per_page,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        }, status=status.HTTP_200_OK)


class StaticDataTypePagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'p'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data_per_page': self.page.paginator.per_page,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        }, status=status.HTTP_200_OK)


class StaticDataPagination(pagination.PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 500
    page_query_param = 'p'

    def get_paginated_response(self, data):
        return Response({
            'links': {
                'next': self.get_next_link(),
                'previous': self.get_previous_link()
            },
            'count': self.page.paginator.count,
            'data_per_page': self.page.paginator.per_page,
            'total_pages': self.page.paginator.num_pages,
            'results': data
        }, status=status.HTTP_200_OK)
