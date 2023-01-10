function loadData(pageName) {

	$("#header").load('components/header.html');
	$("#footer").load('components/footer.html', function () {
		$.getJSON('config_data.json', function (cgf) {


			// use for footer
			$("[name=storeName]").each(function () {
				jQuery(this).html(cgf.info.salon.store);
			});
			$("[name=storePhone]").each(function () {
				jQuery(this).html(cgf.info.salon.phone);
			});
			$("[name=storeFullAddress]").each(function () {
				jQuery(this).html(cgf.info.salon.address);
			});
			$("[name=storeFullAddress]").each(function () {
				jQuery(this).html(cgf.info.salon.address);
			});
			$("[name=storeDistrict]").each(function () {
				jQuery(this).html(cgf.info.salon.district);
			});
			$("[name=storeState]").each(function () {
				jQuery(this).html(cgf.info.salon.state);
			});
			$("[name=storeEmail]").each(function () {
				jQuery(this).html(cgf.info.salon.email);
			});
			$("[name=storeTime_1]").each(function () {
				jQuery(this).html(cgf.info.salon.time_1);
			});
			$("[name=storeTime_2]").each(function () {
				jQuery(this).html(cgf.info.salon.time_2);
			});

			$("[data-booking]").attr('href', cgf.info.social.booking);
			$("[data-facebook]").attr('href', cgf.info.social.facebook);
			$("[data-instagram]").attr('href', cgf.info.social.instagram);
			$("[data-google]").attr('href', cgf.info.social.google);
			$("[data-maps]").attr('src', cgf.info.social.maps);
			$("[data-phone]").attr('href', "tel:" + cgf.info.salon.phone);
			$("[data-email]").attr('href', "mailto:" + cgf.info.salon.email);



			if (pageName == "INDEX") {

				loadDataForIndex(cgf);
			} else if (pageName == "SERVICES") {
				loadDataForServices(cgf);
			} else if (pageName == "GALLERY") {
				loadDataForGallery(cgf);
			} else if (pageName == "SPECIALTIES") {
				loadDataForSpecialties(cgf);
			}



		})
			.fail(function () { $('body').empty().append("Error 403: Can't Load Data Website"); })
	});

}


function loadDataForIndex(cgf) {

	var srtCols = "";
	$.each(cgf.categories, function (count, cat) {
		if(cat.home == true) {
			var strColElement = '<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">' +
			'                    <div class="service-item">' +
			'                        <div class="service-icon">' +
			'                            <i><img src="CAT_SRC" class="icons"></i>' +
			'                        </div>' +
			'                        <h3>CAT_NAME</h3>' +
			'                        <a data-toggle="modal" data-target="#TARGET_SRC" target="_blank" class="btn btn-viewmore">View Detail</a>' +
			'' +
			'                        <div class="modal fade show" id="TARGET_SRC" tabindex="-1" role="dialog" aria-labelledby="TARGET_TITLE" aria-hidden="true">' +
			'                            <div class="modal-dialog modal-dialog-centered" role="document">' +
			'                                <div class="modal-content">' +
			'                                    <div class="modal-header">' +
			'                                        <h5 class="modal-title text-black" name="TARGET_TITLE" id="TARGET_TITLE">CAT_NAME</h5>' +
			'                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
			'                                            <span aria-hidden="true">×</span>' +
			'                                        </button>' +
			'                                    </div>' +
			'                                    <div class="modal-body"><div class="display-table> SERVICES_LIST </div></div>' +
			'                                </div>' +
			'                            </div>' +
			'                        </div>' +
			'                    </div>' +
			'                </div>';

		srtCols = srtCols + strColElement.replace('CAT_SRC', "./img/" + cat.src).replace('CAT_NAME', cat.name).replace('CAT_NAME', cat.name).replace('TARGET_SRC', cat.target).replace('TARGET_SRC', cat.target).replace('TARGET_TITLE', cat.targetTitle);

		var strServices = "";
		$.each(cgf.services, function (count1, srv) {
			if (srv.category == cat.name) {
				var strServiceElement = '<div class="service_item display-row">' +
					'                                                <div class="service_name display-col w-100 text-left text-dark py-3">SERVICE_NAME</div>' +
					'                                                <div class="service_price display-col width-price color-price py-3">SERVICE_PRICE</div>' +
					'                                            </div>';

				strServices = strServices + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " Up" : ""));
			}
		});
		srtCols = srtCols.replace('SERVICES_LIST', strServices);
		}
	});
	$("#servicesOfCate").html(srtCols);


}

function loadDataForServices(cgf) {


	var srtCols = "";
	$.each(cgf.categories, function (count, cat) {
		var strColElement = '<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">' +
			'                    <div class="service-item">' +
			'                        <div class="service-icon">' +
			'                            <i><img src="CAT_SRC" class="icons"></i>' +
			'                        </div>' +
			'                        <h3>CAT_NAME</h3>' +
			'                        <a data-toggle="modal" data-target="#TARGET_SRC" target="_blank" class="btn btn-viewmore">View Detail</a>' +
			'' +
			'                        <div class="modal fade show" id="TARGET_SRC" tabindex="-1" role="dialog" aria-labelledby="TARGET_TITLE" aria-hidden="true">' +
			'                            <div class="modal-dialog modal-dialog-centered" role="document">' +
			'                                <div class="modal-content">' +
			'                                    <div class="modal-header">' +
			'                                        <h5 class="modal-title text-black" name="TARGET_TITLE" id="TARGET_TITLE">CAT_NAME</h5>' +
			'                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
			'                                            <span aria-hidden="true">×</span>' +
			'                                        </button>' +
			'                                    </div>' +
			'                                    <div class="modal-body"><div class="display-table> SERVICES_LIST </div></div>' +
			'                                </div>' +
			'                            </div>' +
			'                        </div>' +
			'                    </div>' +
			'                </div>';

		// $("#TARGET_TITLE").attr('id', cat.target);
		srtCols = srtCols + strColElement.replace('CAT_SRC', "./img/" + cat.src).replace('CAT_NAME', cat.name).replace('CAT_NAME', cat.name).replace('TARGET_SRC', cat.target).replace('TARGET_SRC', cat.target).replace('TARGET_TITLE', cat.targetTitle);

		var strServices = "";
		$.each(cgf.services, function (count1, srv) {
			if (srv.category == cat.name) {
				var strServiceElement = '<div class="service_item display-row">' +
					'                                                <div class="service_name display-col w-100 text-left text-dark py-3">SERVICE_NAME</div>' +
					'                                                <div class="service_price display-col width-price color-price py-3">SERVICE_PRICE</div>' +
					'                                            </div>';

				strServices = strServices + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " Up" : ""));
			}
		});
		srtCols = srtCols.replace('SERVICES_LIST', strServices);
	});
	$("#servicesOfCate").html(srtCols);

}

function loadDataForGallery(cgf) {

	var strGalleryElement = '<div class="col-lg-4 col-md-6">' +
		'                        <div class="team-item">' +
		'                            <div class="team-img">' +
		'                                <img src="IMAGE_SRC" alt="Salon name">' +
		'                                <div class="team-social">' +
		'                                     <a target=_blank href="" data-facebook><i class="fab fa-facebook-f"></i></a>' +
		'                                    <a target=_blank href="" data-instagram><i class="fab fa-instagram"></i></a>' +
		'                                    <a target=_blank href="" data-google><i class="fab fa-google"></i></a>' +
		'                                </div>' +
		'                            </div>' +
		'                        </div>' +
		'                    </div>';


	var strGallery = "";
	$.each(cgf.gallery, function (count, gal) {
		var strSrc = "./img/" + gal.url;
		strGallery = strGallery + strGalleryElement.replace('IMAGE_SRC', strSrc);

	});
	$("#loadGallery").html(strGallery);
	// $('.gallery a').simpleLightbox();
	/* sau khi chay xong thi moi gan hieu ung lightbox vao cho tung the a */
}

function loadDataForSpecialties(cgf) {

	var strSpecialtiesElement = '<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">' +
		'                        <div class="team-item">' +
		'                            <div class="team-img">' +
		'                                <img src="IMAGE_SRC" alt="">' +
		'                                <div class="team-social">' +
		'                    ' +
		'                                    <a href="" data-facebook target="_blank"><i class="fab fa-facebook-f"></i></a>' +
		'                                    <a href="" data-instagram target="_blank"><i class="fab fa-instagram"></i></a>' +
		'                                    <a href="" data-google target="_blank" class="no-border"><i class="fab fa-google"></i></a>' +
		'                                </div>' +
		'                            </div>' +
		'                        </div>' +
		'                    </div>';



	var strSpecialties = "";
	$.each(cgf.specialties, function (count, spe) {
		var strSrc = "./img/" + spe.url;
		strSpecialties = strSpecialties + strSpecialtiesElement.replace('IMAGE_SRC', strSrc);

	});
	$("#loadSpecialties").html(strSpecialties);


}

