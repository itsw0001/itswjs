	@Scope("request")
	@RequestMapping("/log")
   	public void record(HttpServletResponse response, 
   			//@RequestParam("file") MultipartFile file,
   			@RequestParam("file") String file,
   			@RequestParam("data") String data
   			) throws Exception {
   	    
		log.debug( "START" );
		
		File logFile = new File("c:/temp/" + file );
		if (logFile.exists()){
		    //System.out.println("ファイルは存在します");
			//log_file.delete();
		}else{
		    //System.out.println("ファイルは存在しません");
		}
		
		//File file = new File(file_name);
		PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(logFile,true)));
		pw.println(data);
		pw.close();

		// receive file
    	//OutputStream saveFile = new FileOutputStream(dir + filename"input.rtf"); 
    	//FileCopyUtils.copy(file.getInputStream(),saveFile);
		//File saveFile = new File("c:/temp/upload.txt");
   		//FileUtils.copyInputStreamToFile(file.getInputStream(), saveFile);
    	
    	// transfer file
        //Resource inFile = new FileSystemResource(dir + docName);
        //response.setContentType("application/octet-stream;charset=utf-8");
        //response.setContentLength((int)FileUtils.sizeOf(file.getFile()));
        //response.setHeader("Content-Disposition","attachment; filename=\"" + docName +"\"");
        //response.setHeader("Content-Transfer-Encoding", "binary");
        //response.setHeader("X-Result-Conversion", "0");
        //FileCopyUtils.copy(inFile.getInputStream(), response.getOutputStream());

		PrintWriter out = response.getWriter();
		out.println( "SUCCESS");
 
    }
