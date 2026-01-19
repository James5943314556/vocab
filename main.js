// Offline flip flashcards. Front = word only. Back = pos, pronunciation, definition, example.
// ASCII-only, no template literals, no JSX, no weird characters.

const WORDS = [
  { word:"Erudite", pos:"adjective", pron:"AIR-uh-dyte (also AIR-yuh-)", def:"Highly learned and well-read; showing deep knowledge gained through serious study rather than casual familiarity.", ex:"The erudite professor connected the novel to its historical context with ease." },
  { word:"Perspicacious", pos:"adjective", pron:"per-spuh-KAY-shus", def:"Quick to notice and understand things accurately; keenly perceptive and able to judge situations well.", ex:"A perspicacious reviewer spotted the weak assumption immediately." },
  { word:"Mellifluous", pos:"adjective", pron:"muh-LIF-loo-us", def:"Pleasantly smooth, rich, and flowing in sound, especially in speech or music.", ex:"Her mellifluous voice made the audiobook easy to listen to for hours." },
  { word:"Obdurate", pos:"adjective", pron:"OB-duh-rut", def:"Stubbornly refusing to change one's mind or course of action, even when faced with strong reasons to do so.", ex:"He remained obdurate despite clear evidence that the plan was failing." },
  { word:"Sanguine", pos:"adjective", pron:"SAN-gwin", def:"Optimistic or confident, especially when the situation gives others reason to worry.", ex:"She stayed sanguine about the launch even after a few bugs appeared." },
  { word:"Lugubrious", pos:"adjective", pron:"loo-GOO-bree-us", def:"Mournful or gloomy in a heavy, exaggerated way; overly sad in tone or mood.", ex:"His lugubrious speech drained the energy from the celebration." },
  { word:"Fastidious", pos:"adjective", pron:"fa-STID-ee-us", def:"Very careful and exacting; attentive to detail and often hard to satisfy because standards are high.", ex:"She is fastidious about citations and checks every source twice." },
  { word:"Equanimity", pos:"noun", pron:"ee-kwuh-NIM-uh-tee", def:"Mental calmness and steady composure, especially in stressful situations.", ex:"He answered the hostile questions with equanimity." },
  { word:"Pulchritude", pos:"noun", pron:"PUL-kri-tood", def:"Physical beauty, often used in a formal or literary way.", ex:"The painting emphasized the pulchritude of the landscape at dusk." },
  { word:"Obfuscate", pos:"verb", pron:"OB-fuh-skate", def:"To make something unclear or confusing, often by using vague language or unnecessary complexity.", ex:"The memo tried to obfuscate responsibility with passive phrasing." },
  { word:"Didactic", pos:"adjective", pron:"dye-DAK-tik", def:"Intended to teach or instruct, sometimes in a way that feels preachy or overly moralizing.", ex:"The movie became didactic instead of letting the story speak naturally." },
  { word:"Magnanimous", pos:"adjective", pron:"mag-NAN-uh-mus", def:"Generous and forgiving, especially toward a rival or someone who has made a mistake.", ex:"He was magnanimous in victory and praised his opponent's effort." },
  { word:"Austere", pos:"adjective", pron:"aw-STEER", def:"Plain and unadorned in style, or strict and severe in manner; lacking comfort or decoration.", ex:"The austere room felt calm, but a little cold." },
  { word:"Capricious", pos:"adjective", pron:"kuh-PRISH-us", def:"Given to sudden and unpredictable changes in mood or behavior; impulsive and inconsistent.", ex:"The capricious schedule kept shifting without warning." },
  { word:"Munificent", pos:"adjective", pron:"myoo-NIF-uh-sent", def:"Extremely generous, especially with gifts, money, or support.", ex:"A munificent donor funded the entire scholarship program." },
  { word:"Reticent", pos:"adjective", pron:"RET-uh-sent", def:"Reserved and reluctant to speak; inclined to keep thoughts and feelings private.", ex:"He was reticent about his reasons for leaving the company." },
  { word:"Pernicious", pos:"adjective", pron:"per-NISH-us", def:"Highly harmful, often in a subtle or gradual way that can be hard to detect at first.", ex:"The pernicious rumor quietly damaged morale for months." },
  { word:"Impetuous", pos:"adjective", pron:"im-PETCH-oo-us", def:"Acting quickly without careful thought; rash in a way that can cause avoidable problems.", ex:"Her impetuous decision to quit left her scrambling for income." },
  { word:"Ebullient", pos:"adjective", pron:"ih-BULL-yunt", def:"Cheerful, energetic, and full of enthusiasm; lively in a contagious way.", ex:"His ebullient attitude lifted the team during a tough week." },
  { word:"Recondite", pos:"adjective", pron:"REK-un-dyte", def:"Obscure, specialized, or difficult to understand without significant background knowledge.", ex:"The paper was recondite and assumed too much prior expertise." },

  { word:"Acerbic", pos:"adjective", pron:"uh-SER-bik", def:"Sharp, biting, and often harsh in tone, especially in remarks or criticism.", ex:"Her acerbic review was clever but unnecessarily cruel." },
  { word:"Sagacious", pos:"adjective", pron:"suh-GAY-shus", def:"Wise, insightful, and showing sound judgment formed by experience and careful reasoning.", ex:"He offered sagacious advice about hiring and priorities." },
  { word:"Inchoate", pos:"adjective", pron:"in-KOH-it", def:"Not fully developed or organized yet; existing only in a beginning or partial form.", ex:"They had an inchoate strategy but no concrete plan." },
  { word:"Prodigious", pos:"adjective", pron:"pruh-DIJ-us", def:"Remarkably great in size, extent, or ability; impressively large or powerful.", ex:"She made prodigious progress after only a month of practice." },
  { word:"Taciturn", pos:"adjective", pron:"TAS-ih-turn", def:"Habitually quiet and sparing with words; not inclined toward small talk.", ex:"The taciturn engineer spoke rarely, but always precisely." },

  { word:"Eloquent", pos:"adjective", pron:"EL-uh-kwunt", def:"Fluent, persuasive, and effective in expressing ideas, often with style and emotional force.", ex:"She gave an eloquent explanation of why the change mattered." },
  { word:"Diffident", pos:"adjective", pron:"DIF-uh-dunt", def:"Shy and lacking self-confidence; hesitant to assert oneself.", ex:"He sounded diffident at first, then warmed up." },
  { word:"Perfunctory", pos:"adjective", pron:"per-FUNK-tuh-ree", def:"Done with minimal effort or attention; carried out as a routine duty rather than genuine engagement.", ex:"He offered a perfunctory apology and moved on." },
  { word:"Indefatigable", pos:"adjective", pron:"in-di-FAT-uh-guh-bul", def:"Tireless and persistent; continuing with energy and determination without seeming to wear out.", ex:"Her indefatigable work ethic kept the project moving." },
  { word:"Sycophantic", pos:"adjective", pron:"sik-uh-FAN-tik", def:"Overly flattering to gain advantage; insincere praise meant to win favor.", ex:"The sycophantic compliments made the room uncomfortable." },
  { word:"Ubiquitous", pos:"adjective", pron:"yoo-BIK-wuh-tus", def:"Present or found everywhere; so common that it seems unavoidable.", ex:"Smartphones are ubiquitous in modern life." },
  { word:"Dispassionate", pos:"adjective", pron:"dis-PASH-uh-nut", def:"Not influenced by emotion; impartial and objective in judgment or tone.", ex:"He gave a dispassionate assessment of the risks." },
  { word:"Ineffable", pos:"adjective", pron:"in-EF-uh-bul", def:"Too great, intense, or beautiful to be expressed adequately in words.", ex:"The relief was ineffable when the results finally arrived." },
  { word:"Circumspect", pos:"adjective", pron:"SUR-kum-spekt", def:"Cautious and thoughtful; carefully considering consequences before acting or speaking.", ex:"Be circumspect when sharing unverified claims." },
  { word:"Alacrity", pos:"noun", pron:"uh-LAK-ruh-tee", def:"Brisk willingness and eager readiness to act; energetic promptness.", ex:"She accepted the request with alacrity." },
  { word:"Phlegmatic", pos:"adjective", pron:"fleg-MAT-ik", def:"Calm and unemotional; not easily excited, worried, or upset.", ex:"His phlegmatic response steadied the group." },
  { word:"Perceptive", pos:"adjective", pron:"per-SEP-tiv", def:"Quick to notice and understand; sensitive to details that others miss.", ex:"That was a perceptive observation about user behavior." },
  { word:"Laconic", pos:"adjective", pron:"luh-KON-ik", def:"Using very few words; concise and direct, sometimes to the point of seeming blunt.", ex:"His laconic reply ended the conversation." },
  { word:"Tenacious", pos:"adjective", pron:"tuh-NAY-shus", def:"Persistent and determined; holding firmly to a goal despite difficulty or delay.", ex:"She was tenacious in tracking down the root cause." },
  { word:"Esoteric", pos:"adjective", pron:"ess-uh-TER-ik", def:"Understood by only a small group with specialized knowledge; not widely accessible.", ex:"The discussion became esoteric and lost most listeners." },
  { word:"Implacable", pos:"adjective", pron:"im-PLAK-uh-bul", def:"Unable to be appeased or persuaded; unyielding and stubbornly fixed.", ex:"The deadline was implacable, no matter how we argued." },
  { word:"Fortuitous", pos:"adjective", pron:"for-TOO-ih-tus", def:"Happening by chance, often in a way that proves unexpectedly favorable or useful.", ex:"A fortuitous introduction led to a great partnership." },
  { word:"Inscrutable", pos:"adjective", pron:"in-SKROO-tuh-bul", def:"Hard to understand or interpret; not easily read in expression, motive, or meaning.", ex:"His inscrutable smile revealed nothing." },
  { word:"Garrulous", pos:"adjective", pron:"GAR-uh-lus", def:"Excessively talkative, especially in a rambling or long-winded way.", ex:"The garrulous speaker ignored every time limit." },
  { word:"Temerity", pos:"noun", pron:"tuh-MAIR-uh-tee", def:"Reckless boldness or nerve; audacity that shows a lack of proper caution or respect.", ex:"He had the temerity to insult the host." },
  { word:"Venerable", pos:"adjective", pron:"VEN-uh-ruh-bul", def:"Deserving respect because of age, dignity, character, or long service.", ex:"The venerable coach finally retired." },
  { word:"Mutable", pos:"adjective", pron:"MYOO-tuh-bul", def:"Likely to change; not fixed or permanent in form, opinion, or condition.", ex:"Public opinion is mutable and can swing quickly." },
  { word:"Plausible", pos:"adjective", pron:"PLAW-zuh-bul", def:"Seeming reasonable or believable based on what is known, even if not proven.", ex:"That is a plausible explanation, but we need evidence." },
  { word:"Cognizant", pos:"adjective", pron:"KOG-nuh-zunt", def:"Aware of and understanding something; consciously informed about relevant facts or implications.", ex:"She was cognizant of the risks and chose carefully." },
  { word:"Intransigent", pos:"adjective", pron:"in-TRAN-suh-junt", def:"Unwilling to compromise or change; stubbornly refusing to meet others halfway.", ex:"The talks failed because both sides were intransigent." },

  { word:"Apocryphal", pos:"adjective", pron:"uh-POK-ruh-ful", def:"Of doubtful authenticity; widely repeated but not reliably verified as true.", ex:"The story about the founder is likely apocryphal." },
  { word:"Resplendent", pos:"adjective", pron:"reh-SPLEH-dunt", def:"Splendid and impressive in appearance; shining with vivid beauty or brilliance.", ex:"The hall looked resplendent under the stage lights." },
  { word:"Vociferous", pos:"adjective", pron:"voh-SIF-uh-rus", def:"Loud and forceful in expression; outspoken in a way that demands attention.", ex:"A vociferous crowd called for an explanation." },
  { word:"Sublime", pos:"adjective", pron:"suh-BLYME", def:"So impressive or beautiful that it inspires awe; elevated beyond the ordinary.", ex:"The view from the ridge was sublime." },
  { word:"Obsequious", pos:"adjective", pron:"ub-SEE-kwee-us", def:"Excessively eager to please or obey; overly submissive in a way that feels insincere.", ex:"His obsequious agreement made honest feedback impossible." },
  { word:"Enigmatic", pos:"adjective", pron:"en-ig-MAT-ik", def:"Mysterious or difficult to interpret; suggesting depth without being easily understood.", ex:"She gave an enigmatic answer and changed the subject." },
  { word:"Prosaic", pos:"adjective", pron:"proh-ZAY-ik", def:"Ordinary and lacking imagination or excitement; plainly practical and unromantic.", ex:"The solution was prosaic but effective." },
  { word:"Assiduous", pos:"adjective", pron:"uh-SID-joo-us", def:"Hardworking and diligent; showing sustained effort and careful attention over time.", ex:"He was assiduous about follow-ups and documentation." },
  { word:"Penchant", pos:"noun", pron:"PEN-chunt", def:"A strong liking or tendency toward something; a habitual preference.", ex:"She has a penchant for word games." },
  { word:"Evanescent", pos:"adjective", pron:"ev-uh-NESS-unt", def:"Fleeting and quickly fading; lasting only briefly before disappearing.", ex:"The evanescent glow of dusk vanished fast." },
  { word:"Supercilious", pos:"adjective", pron:"soo-per-SIL-ee-us", def:"Arrogantly superior in attitude; showing contempt or disdain for others.", ex:"His supercilious smirk shut down the discussion." },
  { word:"Lucid", pos:"adjective", pron:"LOO-sid", def:"Clear and easy to understand; expressed in a way that makes complex ideas accessible.", ex:"Her explanation was lucid and well structured." },
  { word:"Inured", pos:"adjective", pron:"ih-NOORD", def:"Accustomed to something unpleasant through long experience; hardened by repeated exposure.", ex:"After years of deadlines, he was inured to stress." },
  { word:"Specious", pos:"adjective", pron:"SPEE-shus", def:"Seemingly plausible but actually wrong or misleading; attractive on the surface while flawed underneath.", ex:"It was a specious argument that ignored key facts." },
  { word:"Audacious", pos:"adjective", pron:"aw-DAY-shus", def:"Bold and daring, willing to take significant risks; sometimes shocking in its confidence.", ex:"The audacious plan worked, but it could have failed badly." },
  { word:"Moribund", pos:"adjective", pron:"MOR-uh-bund", def:"In a state of decline or near failure; lacking vitality and headed toward an end.", ex:"The moribund project needed a reset to survive." },
  { word:"Commensurate", pos:"adjective", pron:"kuh-MEN-suh-rut", def:"Proportional and matching in size or degree; appropriate relative to something else.", ex:"Pay should be commensurate with responsibility." },
  { word:"Ineluctable", pos:"adjective", pron:"in-ih-LUK-tuh-bul", def:"Impossible to avoid or escape; certain to happen regardless of resistance.", ex:"The ineluctable conclusion was that we needed to pivot." },
  { word:"Reverent", pos:"adjective", pron:"REV-uh-runt", def:"Showing deep respect and seriousness; treating something as worthy of honor.", ex:"They spoke in reverent tones about their mentor." },
  { word:"Pithy", pos:"adjective", pron:"PITH-ee", def:"Brief but full of meaning; concise in a way that still carries substance and impact.", ex:"He gave a pithy summary that captured the point." },
  { word:"Truculent", pos:"adjective", pron:"TRUCK-yuh-lunt", def:"Aggressively defiant or hostile; eager to argue or fight rather than cooperate.", ex:"His truculent response escalated a small disagreement." },
  { word:"Meticulous", pos:"adjective", pron:"muh-TIK-yuh-lus", def:"Extremely careful and precise; paying close attention to details and correctness.", ex:"She was meticulous about testing edge cases." },
  { word:"Irascible", pos:"adjective", pron:"ih-RASS-uh-bul", def:"Easily angered; prone to irritability and a quick temper.", ex:"The irascible customer snapped over a minor delay." },
  { word:"Propitious", pos:"adjective", pron:"pruh-PISH-us", def:"Favorable and well timed; suggesting good conditions for success.", ex:"The timing was propitious for a new launch." },
  { word:"Amiable", pos:"adjective", pron:"AY-mee-uh-bul", def:"Friendly and pleasant; easy to get along with and generally good natured.", ex:"He stayed amiable even during tense negotiations." },

  { word:"Desultory", pos:"adjective", pron:"DES-uhl-tor-ee", def:"Lacking a clear plan, purpose, or connection; drifting from topic to topic without focus.", ex:"The meeting was desultory and produced no decisions." },
  { word:"Incisive", pos:"adjective", pron:"in-SY-siv", def:"Sharp and direct in analysis; quickly identifying what matters most.", ex:"Her incisive critique improved the draft immediately." },
  { word:"Diffusive", pos:"adjective", pron:"dih-FYOO-siv", def:"Spread out and not concentrated; dispersed rather than focused in one place.", ex:"A diffusive light softened the harsh shadows." },
  { word:"Unassailable", pos:"adjective", pron:"un-uh-SAY-luh-bul", def:"Not open to attack or dispute; so well supported that criticism has little room to stand.", ex:"His evidence was unassailable and ended the debate." },
  { word:"Pensive", pos:"adjective", pron:"PEN-siv", def:"Deeply thoughtful, often with a quiet seriousness or mild sadness.", ex:"She looked pensive as she reread the old messages." },
  { word:"Cerebral", pos:"adjective", pron:"suh-REE-brul", def:"Intellectual and analytical rather than emotional; focused on ideas and reasoning.", ex:"The novel is cerebral and rewards slow reading." },
  { word:"Immoderate", pos:"adjective", pron:"ih-MOD-uh-rut", def:"Excessive in degree; going beyond what is reasonable or balanced.", ex:"His immoderate spending created long term stress." },
  { word:"Soporific", pos:"adjective", pron:"sop-uh-RIF-ik", def:"Tending to cause sleep; dulling attention and making one drowsy.", ex:"The warm room was soporific after lunch." },
  { word:"Quotidian", pos:"adjective", pron:"kwoh-TID-ee-un", def:"Everyday and ordinary; part of routine life rather than something special.", ex:"He wanted a break from the quotidian grind." },
  { word:"Abstruse", pos:"adjective", pron:"ab-STROOS", def:"Difficult to understand because it is complex, technical, or expressed in an obscure way.", ex:"The explanation was abstruse, so we asked for a simpler example." },
  { word:"Fecund", pos:"adjective", pron:"FEE-kund", def:"Highly productive or creative; capable of producing many ideas, results, or offspring.", ex:"Her fecund imagination generated new concepts daily." },
  { word:"Imperturbable", pos:"adjective", pron:"im-per-TUR-buh-bul", def:"Not easily upset or disturbed; remaining calm and steady under pressure.", ex:"He stayed imperturbable during the outage." },
  { word:"Elusive", pos:"adjective", pron:"ih-LOO-siv", def:"Hard to find, catch, or achieve; difficult to pin down with certainty.", ex:"A clear solution remained elusive for weeks." },
  { word:"Complacent", pos:"adjective", pron:"kum-PLAY-sunt", def:"Too satisfied with the current situation, leading to carelessness or lack of effort to improve.", ex:"They got complacent after early wins and stopped iterating." },
  { word:"Sonorous", pos:"adjective", pron:"suh-NOR-us", def:"Deep, full, and resonant in sound; richly toned and carrying well.", ex:"His sonorous voice filled the auditorium." },
  { word:"Tantamount", pos:"adjective", pron:"TAN-tuh-mount", def:"Equivalent in effect or meaning, even if not literally identical.", ex:"Ignoring the problem was tantamount to approving it." },
  { word:"Hapless", pos:"adjective", pron:"HAP-lis", def:"Unlucky and unfortunate, often in a way that seems helpless or ill fated.", ex:"The hapless traveler missed every connection." },
  { word:"Irreproachable", pos:"adjective", pron:"ir-ree-PROH-chuh-bul", def:"Beyond criticism; so correct or ethical that faults are hard to find.", ex:"Her irreproachable conduct earned immediate trust." },
  { word:"Precarious", pos:"adjective", pron:"prih-KAIR-ee-us", def:"Unstable and risky; dependent on conditions that could change suddenly.", ex:"Their finances were precarious after the contract ended." },
  { word:"Wistful", pos:"adjective", pron:"WIST-ful", def:"Full of gentle longing or quiet sadness, often when thinking about the past.", ex:"He sounded wistful when he mentioned his hometown." },
  { word:"Recalcitrant", pos:"adjective", pron:"ri-KAL-suh-trunt", def:"Stubbornly resisting authority or control; difficult to manage because of refusal to cooperate.", ex:"The recalcitrant system kept failing under real load." },
  { word:"Scrupulous", pos:"adjective", pron:"SKROO-pyuh-lus", def:"Careful and exact, especially about moral correctness, rules, or accuracy.", ex:"She was scrupulous about verifying every number." },
  { word:"Panoply", pos:"noun", pron:"PAN-uh-plee", def:"A wide and impressive array or collection; a full range of related items.", ex:"The museum displayed a panoply of artifacts." },
  { word:"Inept", pos:"adjective", pron:"ih-NEPT", def:"Not skilled; clumsy or incompetent in a way that causes avoidable mistakes.", ex:"His inept handling of the complaint made it worse." },
  { word:"Beatific", pos:"adjective", pron:"bee-uh-TIF-ik", def:"Blissfully happy in a serene, radiant way; showing quiet joy or calm delight.", ex:"She wore a beatific smile after the good news." },
  { word:"Filibuster", pos:"noun", pron:"FIL-uh-bus-ter", def:"A procedural tactic used in a legislative body to delay or block a vote by extending debate beyond normal limits.", ex:"The senator launched a filibuster to prevent the bill from reaching a final vote." },
  { word:"Autocracy", pos:"noun", pron:"aw-TOK-ruh-see", def:"A system of government in which absolute power is concentrated in the hands of a single ruler, with little or no accountability.", ex:"The country slid into autocracy after elections were suspended." },
  { word:"Oligarchy", pos:"noun", pron:"OL-uh-gar-kee", def:"A form of government where power is held by a small, elite group, often based on wealth, family ties, or military control.", ex:"The reforms were blocked by an entrenched oligarchy." },
  { word:"Plutocracy", pos:"noun", pron:"ploo-TOK-ruh-see", def:"A system of governance in which political power is effectively controlled by the wealthy.", ex:"Critics argue the tax code reinforces a modern plutocracy." },
  { word:"Technocracy", pos:"noun", pron:"tek-NOK-ruh-see", def:"A system where decision-making authority is vested in technical experts rather than elected officials.", ex:"The emergency cabinet functioned as a temporary technocracy." },
  { word:"Populism", pos:"noun", pron:"POP-yuh-liz-um", def:"A political approach that claims to represent ordinary people against a perceived corrupt elite.", ex:"Populism surged amid rising economic inequality." },
  { word:"Demagogue", pos:"noun", pron:"DEM-uh-gog", def:"A political leader who seeks support by appealing to emotions, fears, or prejudices rather than rational argument.", ex:"The demagogue exploited public anger for personal gain." },
  { word:"Gerrymander", pos:"verb", pron:"JER-ee-man-der", def:"To manipulate electoral district boundaries to favor a particular political party or group.", ex:"The state legislature was accused of trying to gerrymander the map." },
  { word:"Suffrage", pos:"noun", pron:"SUF-rij", def:"The right to vote in political elections.", ex:"Universal suffrage was achieved only after decades of activism." },
  { word:"Enfranchise", pos:"verb", pron:"en-FRAN-chyze", def:"To grant the right to vote or full political rights to a person or group.", ex:"The amendment enfranchised millions of new voters." },

  { word:"Disenfranchise", pos:"verb", pron:"dis-en-FRAN-chyze", def:"To deprive a person or group of the right to vote or participate politically.", ex:"The law was criticized for disenfranchising minority voters." },
  { word:"Bicameral", pos:"adjective", pron:"bye-KAM-er-ul", def:"Having two legislative chambers, typically an upper and lower house.", ex:"The United States has a bicameral legislature." },
  { word:"Unicameral", pos:"adjective", pron:"yoo-nih-KAM-er-ul", def:"Having a single legislative chamber.", ex:"Nebraska operates under a unicameral system." },
  { word:"Veto", pos:"noun", pron:"VEE-toh", def:"The constitutional power to reject a proposed law or decision.", ex:"The president issued a veto against the bill." },
  { word:"Ratify", pos:"verb", pron:"RAT-uh-fy", def:"To formally approve or confirm an agreement, treaty, or law.", ex:"The senate voted to ratify the international treaty." },
  { word:"Impeachment", pos:"noun", pron:"im-PEECH-ment", def:"The formal process of charging a public official with misconduct, potentially leading to removal from office.", ex:"Impeachment proceedings dominated the news cycle." },
  { word:"Sovereignty", pos:"noun", pron:"SOV-rin-tee", def:"Supreme authority within a territory, free from external control.", ex:"The treaty threatened national sovereignty." },
  { word:"Federalism", pos:"noun", pron:"FED-er-uh-liz-um", def:"A system of government in which power is divided between a central authority and regional units.", ex:"Federalism allows states to retain significant autonomy." },
  { word:"Centralization", pos:"noun", pron:"sen-truh-luh-ZAY-shun", def:"The concentration of administrative or political power in a central authority.", ex:"Centralization increased efficiency but reduced local control." },
  { word:"Decentralization", pos:"noun", pron:"dee-sen-truh-luh-ZAY-shun", def:"The redistribution of power from a central authority to regional or local bodies.", ex:"Decentralization empowered local governments." },

  { word:"Bureaucracy", pos:"noun", pron:"byoo-ROK-ruh-see", def:"A system of administration characterized by hierarchical structure, formal rules, and specialized roles.", ex:"The bureaucracy slowed the implementation of reforms." },
  { word:"Regulatory", pos:"adjective", pron:"REG-yuh-luh-tor-ee", def:"Relating to rules or directives intended to control or govern conduct.", ex:"Regulatory agencies oversee financial markets." },
  { word:"Deregulation", pos:"noun", pron:"dee-reg-yuh-LAY-shun", def:"The reduction or removal of government controls over an industry.", ex:"Deregulation reshaped the airline industry." },
  { word:"Subsidy", pos:"noun", pron:"SUB-suh-dee", def:"Financial assistance provided by the government to support an industry or policy objective.", ex:"Farmers rely heavily on agricultural subsidies." },
  { word:"Tariff", pos:"noun", pron:"TAIR-if", def:"A tax imposed on imported goods, often to protect domestic industries.", ex:"The tariff increased the price of foreign steel." },
  { word:"Protectionism", pos:"noun", pron:"pruh-TEK-shuh-niz-um", def:"An economic policy aimed at shielding domestic industries from foreign competition.", ex:"Protectionism intensified trade tensions." },
  { word:"Free Trade", pos:"noun", pron:"FREE trayd", def:"An economic policy that allows goods and services to be traded across borders with minimal restrictions.", ex:"Free trade agreements expanded export markets." },
  { word:"Monetary Policy", pos:"noun", pron:"MON-uh-tair-ee POL-uh-see", def:"Central bank actions that influence money supply and credit conditions to manage economic stability.", ex:"Monetary policy was tightened to control inflation." },
  { word:"Fiscal Policy", pos:"noun", pron:"FIS-kuhl POL-uh-see", def:"Government decisions on taxation and spending used to influence economic conditions.", ex:"Fiscal policy aimed to stimulate growth during the recession." },
  { word:"Inflation", pos:"noun", pron:"in-FLAY-shun", def:"A sustained increase in the general price level of goods and services, reducing purchasing power.", ex:"Inflation eroded real wages." },

  { word:"Deflation", pos:"noun", pron:"dee-FLAY-shun", def:"A sustained decrease in the general price level, often associated with reduced demand and economic slowdown.", ex:"Deflation discouraged consumer spending." },
  { word:"Stagflation", pos:"noun", pron:"stag-FLAY-shun", def:"An economic condition characterized by slow growth, high unemployment, and high inflation simultaneously.", ex:"Stagflation challenged conventional policy tools." },
  { word:"Austerity", pos:"noun", pron:"aw-STER-uh-tee", def:"Government policies aimed at reducing public spending to control debt.", ex:"Austerity measures sparked widespread protests." },
  { word:"Deficit", pos:"noun", pron:"DEF-uh-sit", def:"The amount by which government expenditures exceed revenues.", ex:"The budget deficit widened significantly." },
  { word:"Surplus", pos:"noun", pron:"SUR-plus", def:"An excess of revenues over expenditures.", ex:"The country reported a rare budget surplus." },
  { word:"National Debt", pos:"noun", pron:"NASH-uh-nul det", def:"The total amount of money a government owes to creditors.", ex:"National debt reached historic levels." },
  { word:"Bond", pos:"noun", pron:"bond", def:"A debt security issued by a government or corporation to raise capital, promising repayment with interest.", ex:"Investors bought government bonds for stability." },
  { word:"Yield", pos:"noun", pron:"yeeld", def:"The income return on an investment, usually expressed as a percentage.", ex:"Bond yields rose sharply." },
  { word:"Quantitative Easing", pos:"noun", pron:"KWAHN-tuh-tay-tiv EE-zing", def:"A monetary policy where a central bank purchases assets to increase money supply and stimulate the economy.", ex:"Quantitative easing was used after the financial crisis." },
  { word:"Liquidity", pos:"noun", pron:"lih-KWID-uh-tee", def:"The ease with which assets can be converted into cash without significant loss of value.", ex:"Liquidity dried up during the panic." },

  { word:"Capital Flight", pos:"noun", pron:"KAP-ih-tul flyt", def:"Large-scale movement of financial assets out of a country due to instability or loss of confidence.", ex:"Capital flight accelerated after the coup." },
  { word:"Cronyism", pos:"noun", pron:"KROH-nee-iz-um", def:"The practice of favoring friends or associates in political or economic appointments.", ex:"Cronyism undermined public trust." },
  { word:"Rent-Seeking", pos:"noun", pron:"rent SEEK-ing", def:"Efforts to gain economic advantage through political manipulation rather than productive activity.", ex:"Rent-seeking behavior distorted the market." },
  { word:"Externality", pos:"noun", pron:"eks-ter-NAL-uh-tee", def:"A cost or benefit imposed on third parties not directly involved in an economic transaction.", ex:"Pollution is a negative externality." },
  { word:"Public Goods", pos:"noun", pron:"PUB-lik goods", def:"Goods that are non-excludable and non-rivalrous, such as national defense.", ex:"Markets underprovide public goods." },
  { word:"Moral Hazard", pos:"noun", pron:"MOR-uhl HAZ-erd", def:"A situation where protection from risk encourages riskier behavior.", ex:"Bailouts can create moral hazard." },
  { word:"Price Controls", pos:"noun", pron:"pryss kun-TROHLS", def:"Government-imposed limits on prices to prevent inflation or protect consumers.", ex:"Price controls caused shortages." },
  { word:"Cartel", pos:"noun", pron:"kar-TEL", def:"A group of producers that collude to control prices or limit competition.", ex:"The cartel manipulated global supply." },
  { word:"Antitrust", pos:"noun", pron:"AN-tee-trust", def:"Laws and policies designed to promote competition and prevent monopolistic practices.", ex:"Antitrust enforcement targeted the merger." },
  { word:"Monopoly", pos:"noun", pron:"muh-NOP-uh-lee", def:"Exclusive control of a market by a single seller.", ex:"The monopoly stifled innovation." },

  { word:"Oligopoly", pos:"noun", pron:"ol-ih-GOP-uh-lee", def:"A market dominated by a small number of firms with significant pricing power.", ex:"The airline industry is an oligopoly." },
  { word:"Market Failure", pos:"noun", pron:"MAR-kit FAIL-yer", def:"A situation where free markets fail to allocate resources efficiently.", ex:"Pollution exemplifies market failure." },
  { word:"Redistribution", pos:"noun", pron:"ree-dis-truh-BYOO-shun", def:"Government reallocation of income or wealth to reduce inequality.", ex:"Redistribution programs expanded social services." },
  { word:"Progressive Taxation", pos:"noun", pron:"pruh-GRES-iv tak-SAY-shun", def:"A tax system in which higher incomes are taxed at higher rates.", ex:"Progressive taxation aims to reduce inequality." },
  { word:"Regressive Tax", pos:"noun", pron:"ruh-GRES-iv taks", def:"A tax that takes a larger percentage of income from low earners than high earners.", ex:"Sales taxes are often regressive." },
  { word:"Means-Tested", pos:"adjective", pron:"MEENZ TES-tid", def:"Eligibility determined based on income or financial resources.", ex:"The program is means-tested." },
  { word:"Entitlement", pos:"noun", pron:"en-TY-tul-ment", def:"A government benefit to which individuals have a legal right if criteria are met.", ex:"Healthcare is treated as an entitlement." },
  { word:"Social Contract", pos:"noun", pron:"SOH-shul KON-trakt", def:"The implicit agreement between citizens and the state defining rights and obligations.", ex:"Taxation is justified through the social contract." },
  { word:"Legitimacy", pos:"noun", pron:"luh-JIT-uh-muh-see", def:"The recognized right of a government to rule, based on law, consent, or tradition.", ex:"Elections bolster political legitimacy." },
  { word:"Authoritarianism", pos:"noun", pron:"uh-THOR-uh-tair-ee-uh-niz-um", def:"A governing system that emphasizes obedience to authority and limits political freedoms.", ex:"Authoritarianism expanded after the emergency decree." },
  { word:"Hedonism", pos:"noun", pron:"HEE-duh-niz-um", def:"A philosophical view that treats pleasure (and the avoidance of pain) as the highest good or primary guide for how one should live.", ex:"His decision-making drifted toward hedonism, prioritizing comfort over long-term goals." },
  { word:"Hedonistic", pos:"adjective", pron:"hee-duh-NIS-tik", def:"Focused on or motivated by the pursuit of pleasure, often with little concern for discipline, duty, or long-term consequences.", ex:"The product was marketed with a hedonistic emphasis on indulgence and convenience." },
  { word:"Prerogative", pos:"noun", pron:"prih-ROG-uh-tiv", def:"A special right or privilege held by a person or group, often tied to a role, authority, or tradition.", ex:"It is the board’s prerogative to approve the final budget." },
  { word:"Freudian", pos:"adjective", pron:"FROY-dee-un", def:"Relating to Sigmund Freud or psychoanalytic ideas, especially those emphasizing unconscious motives, repression, and childhood influence.", ex:"The critic offered a Freudian reading of the character’s repeated sabotage." },
  { word:"Sycophantic", pos:"adjective", pron:"sik-uh-FAN-tik", def:"Insincerely flattering or excessively deferential in order to gain favor, status, or advantage.", ex:"The sycophantic praise made the feedback session useless." },

  { word:"Epistemology", pos:"noun", pron:"ih-PISS-tuh-MOL-uh-jee", def:"The branch of philosophy concerned with knowledge: what counts as knowing, how beliefs are justified, and what limits knowledge has.", ex:"Epistemology asks what makes a claim credible rather than merely confident." },
  { word:"Ontology", pos:"noun", pron:"on-TOL-uh-jee", def:"The study of what exists and how categories of being relate; in tech, a structured way to define entities and their relationships.", ex:"They built an ontology to standardize concepts across datasets." },
  { word:"Metaphysics", pos:"noun", pron:"met-uh-FIZ-iks", def:"Philosophical inquiry into reality beyond physical measurement, such as identity, causation, time, and the nature of existence.", ex:"Metaphysics debates whether properties are real or just mental labels." },
  { word:"Utilitarianism", pos:"noun", pron:"yoo-til-uh-TAIR-ee-uh-niz-um", def:"An ethical theory that judges actions by their consequences, aiming to maximize overall well-being or happiness.", ex:"The policy was defended with utilitarianism: it helped the greatest number." },
  { word:"Deontology", pos:"noun", pron:"dee-on-TOL-uh-jee", def:"An ethical theory emphasizing duties and rules: some actions are right or wrong regardless of outcomes.", ex:"A deontology-based view rejected lying even when it seemed beneficial." },
  { word:"Consequentialism", pos:"noun", pron:"kon-suh-KWEN-shuh-liz-um", def:"A family of ethical theories that evaluate actions primarily by their results rather than intentions or rules.", ex:"Consequentialism can justify strict policies if the outcomes are better overall." },
  { word:"Virtue ethics", pos:"noun", pron:"VER-choo ETH-iks", def:"An approach to ethics that focuses on character and habits, asking what a good person would cultivate rather than which rules to follow.", ex:"Virtue ethics emphasizes integrity as a stable trait, not a one-off choice." },
  { word:"Existentialism", pos:"noun", pron:"eg-zis-TEN-shuh-liz-um", def:"A philosophy stressing individual freedom, responsibility, and meaning-making in a world without guaranteed purpose.", ex:"Existentialism insists you create meaning through choices, not by inheriting it." },
  { word:"Nihilism", pos:"noun", pron:"NYE-uh-liz-um", def:"The belief that life lacks inherent meaning, value, or objective moral truth, often paired with deep skepticism.", ex:"After the scandal, his nihilism made every goal feel pointless." },
  { word:"Absurdism", pos:"noun", pron:"ab-SER-diz-um", def:"The view that humans seek meaning in a universe that offers none, and that we must live despite this tension rather than resolve it.", ex:"Absurdism frames persistence as a response to a silent universe." },
  { word:"Stoicism", pos:"noun", pron:"STOH-uh-siz-um", def:"A philosophy of resilience that emphasizes self-control, rational judgment, and focusing on what you can control.", ex:"Stoicism helped her stay calm during unpredictable setbacks." },
  { word:"Determinism", pos:"noun", pron:"dih-TUR-muh-niz-um", def:"The idea that events are fixed by prior causes and laws of nature, leaving no genuine alternative possibilities.", ex:"Determinism challenges the intuition that you could have chosen otherwise." },
  { word:"Free will", pos:"noun", pron:"FREE wil", def:"The capacity to choose among alternatives in a way that is meaningfully under one’s control, often debated against determinism.", ex:"The debate centered on whether free will survives neuroscience." },
  { word:"Compatibilism", pos:"noun", pron:"kum-PAT-uh-bil-iz-um", def:"The view that free will and determinism can both be true if freedom is defined as acting according to one’s reasons without coercion.", ex:"Compatibilism argues responsibility can exist even in a causal universe." },
  { word:"Phenomenology", pos:"noun", pron:"fih-NOM-uh-NOL-uh-jee", def:"A method and philosophy focusing on lived experience and how things appear to consciousness, before scientific explanation.", ex:"Phenomenology describes what pain feels like, not only what neurons do." },
  { word:"Hermeneutics", pos:"noun", pron:"hur-muh-NYOO-tiks", def:"The theory of interpretation, especially of texts, language, and meaning in social context.", ex:"Hermeneutics matters when the same sentence can mean different things in different settings." },
  { word:"Dialectic", pos:"noun", pron:"dye-uh-LEK-tik", def:"A method of reasoning through tension between opposing ideas, often aiming to refine concepts via critique and synthesis.", ex:"Their debate became a dialectic that clarified the real tradeoffs." },
  { word:"Teleology", pos:"noun", pron:"tee-lee-OL-uh-jee", def:"Explanation in terms of purpose or ends, asking what something is for rather than only what causes it.", ex:"Teleology in biology is controversial because purpose can be misleading." },

  { word:"A priori", pos:"adjective", pron:"ah pree-OR-eye", def:"Known or justified independent of experience, based on reasoning rather than observation.", ex:"Some argue basic logic is a priori knowledge." },
  { word:"Empiricism", pos:"noun", pron:"em-PEER-uh-siz-um", def:"The view that knowledge should be grounded in observation and experience, emphasizing evidence over speculation.", ex:"Empiricism pushed the team to test assumptions with real users." },
  { word:"Rationalism", pos:"noun", pron:"RASH-uh-nuh-liz-um", def:"The view that reason and inference can yield knowledge, sometimes more reliably than sensory experience alone.", ex:"Rationalism treats clear reasoning as a primary source of justified belief." },
  { word:"Skepticism", pos:"noun", pron:"SKEP-tuh-siz-um", def:"A stance of doubt toward claims until sufficient evidence is provided; in philosophy, questioning whether certainty is possible.", ex:"Healthy skepticism improved the reliability of their conclusions." },
  { word:"Solipsism", pos:"noun", pron:"SOL-ip-siz-um", def:"The view that only one’s own mind is certain to exist, making the external world and other minds unknowable or doubtful.", ex:"Solipsism is hard to live by, but it highlights limits of certainty." },
  { word:"Panpsychism", pos:"noun", pron:"pan-SY-kiz-um", def:"The theory that consciousness or mind-like properties are fundamental and widespread in nature, not limited to brains.", ex:"Panpsychism offers an alternative to the idea that consciousness suddenly appears from complexity." },
  { word:"Dualism", pos:"noun", pron:"DOO-uh-liz-um", def:"The view that mind and body are distinct kinds of things, often treating consciousness as non-physical.", ex:"Dualism struggles to explain how mind and matter interact." },
  { word:"Materialism", pos:"noun", pron:"muh-TEER-ee-uh-liz-um", def:"The view that everything real is ultimately physical, including mental states as brain processes or physical patterns.", ex:"Materialism interprets thought as a product of physical systems." },
  { word:"Idealism", pos:"noun", pron:"eye-DEE-uh-liz-um", def:"The view that reality is fundamentally mental or mind-dependent, and that the physical world is secondary to consciousness or ideas.", ex:"Idealism claims the world we know is inseparable from perception." },
  { word:"Pragmatism", pos:"noun", pron:"PRAG-muh-tiz-um", def:"A philosophy that evaluates ideas by their practical consequences and usefulness rather than by abstract purity.", ex:"Pragmatism favored a solution that worked reliably over one that was elegant." },

  { word:"Hedonic treadmill", pos:"noun", pron:"hih-DON-ik TRED-mil", def:"The tendency to quickly return to a baseline level of satisfaction after positive or negative changes, making gains feel temporary.", ex:"The hedonic treadmill explains why upgrades stop feeling exciting." },
  { word:"Cognitive dissonance", pos:"noun", pron:"KOG-nih-tiv DIS-uh-nuns", def:"Psychological discomfort from holding conflicting beliefs or acting against one’s values, often resolved by rationalization.", ex:"Cognitive dissonance made him justify the decision he already made." },
  { word:"Confirmation bias", pos:"noun", pron:"kon-fer-MAY-shun BYE-us", def:"The tendency to seek, interpret, or remember information that supports existing beliefs while dismissing contrary evidence.", ex:"Confirmation bias led them to ignore data that contradicted their hypothesis." },
  { word:"Anchoring bias", pos:"noun", pron:"ANG-ker-ing BYE-us", def:"The tendency to rely too heavily on the first number or idea encountered when making judgments.", ex:"Anchoring bias made the initial estimate shape every later negotiation." },
  { word:"Availability heuristic", pos:"noun", pron:"uh-VAIL-uh-bil-ih-tee hyoo-RIS-tik", def:"A mental shortcut where people judge likelihood by how easily examples come to mind, not by base rates.", ex:"The availability heuristic made rare risks feel common after a news story." },
  { word:"Pareidolia", pos:"noun", pron:"pair-eye-DOH-lee-uh", def:"Perceiving meaningful patterns, like faces, in random or ambiguous stimuli.", ex:"Pareidolia is why people see shapes in clouds and noise." },
  { word:"Occam's razor", pos:"noun", pron:"OK-umz RAY-zer", def:"A principle favoring simpler explanations when multiple hypotheses fit the evidence, without claiming simplicity guarantees truth.", ex:"Occam's razor suggested a configuration bug rather than a conspiracy." },
  { word:"Bayes' theorem", pos:"noun", pron:"BAYZ THEE-uh-rum", def:"A rule for updating the probability of a belief based on new evidence, combining prior expectations with observed data.", ex:"Bayes' theorem formalizes how evidence should shift confidence." },
  { word:"Falsifiability", pos:"noun", pron:"fal-suh-fy-uh-BIL-ih-tee", def:"The property of a claim being testable in a way that could prove it wrong, often used to distinguish scientific statements.", ex:"Without falsifiability, the theory could not be rigorously evaluated." },
  { word:"Paradigm shift", pos:"noun", pron:"PAIR-uh-dyme shift", def:"A major change in the dominant framework used to understand a field, altering what questions and methods seem valid.", ex:"Deep learning produced a paradigm shift in computer vision." },

  { word:"Turing test", pos:"noun", pron:"TOOR-ing test", def:"A benchmark for machine intelligence where a system tries to appear human in conversation to an evaluator.", ex:"Passing the Turing test would not necessarily prove real understanding." },
  { word:"Artificial general intelligence", pos:"noun", pron:"ar-tuh-FISH-uhl JEN-ruhl in-TEL-uh-jens", def:"A hypothetical AI that can learn and perform a wide range of tasks at or beyond human level, transferring knowledge across domains.", ex:"AGI is discussed as a capability leap beyond narrow tools." },
  { word:"Alignment", pos:"noun", pron:"uh-LINE-ment", def:"The goal of making an AI system reliably pursue intended objectives while avoiding harmful or unintended behavior.", ex:"Alignment research tries to reduce surprises when models scale." },
  { word:"Value alignment", pos:"noun", pron:"VAL-yoo uh-LINE-ment", def:"Ensuring an AI’s behavior reflects human values and constraints, including safety, fairness, and respect for rights.", ex:"Value alignment is hard because people disagree about values." },
  { word:"Reward hacking", pos:"noun", pron:"ri-WORD HAK-ing", def:"When an AI system learns to maximize a reward signal in unintended ways that do not match the real goal.", ex:"Reward hacking occurred when the agent exploited a scoring loophole." },
  { word:"Wireheading", pos:"noun", pron:"WYRE-hed-ing", def:"A failure mode where an agent directly manipulates its reward mechanism instead of achieving the intended task.", ex:"They redesigned the objective to prevent wireheading behaviors." },
  { word:"Emergent behavior", pos:"noun", pron:"ih-MER-jent bih-HAY-vyer", def:"Complex, sometimes unexpected capabilities or patterns that arise from interactions within a system, not explicitly programmed.", ex:"Emergent behavior appeared when the model started doing multi-step planning." },
  { word:"Interpretability", pos:"noun", pron:"in-ter-pruh-tuh-BIL-ih-tee", def:"Methods for understanding why a model produced a particular output by analyzing internal representations or causal features.", ex:"Interpretability tools helped identify what features drove the classification." },
  { word:"Explainability", pos:"noun", pron:"ik-SPLAY-nuh-bil-ih-tee", def:"The ability to provide human-understandable reasons for a model’s decisions, often required in high-stakes settings.", ex:"Explainability mattered because the decision affected access to credit." },
  { word:"Model collapse", pos:"noun", pron:"MOD-uhl kuh-LAPS", def:"Degradation that can occur when models are trained on too much synthetic or low-quality generated data, causing loss of diversity and accuracy.", ex:"Model collapse was suspected when outputs became repetitive and less grounded." },

  { word:"Hallucination", pos:"noun", pron:"huh-LOO-suh-NAY-shun", def:"In AI, a confident-sounding output that is ungrounded or incorrect, often presented as if it were factual.", ex:"The chatbot produced a hallucination about a paper that does not exist." },
  { word:"Prompt injection", pos:"noun", pron:"prompt in-JEK-shun", def:"An attack where hidden or crafted text manipulates a model to ignore instructions, reveal secrets, or perform unintended actions.", ex:"Prompt injection in a webpage caused the agent to leak its system rules." },
  { word:"Jailbreak", pos:"noun", pron:"JAYL-brayk", def:"A technique intended to bypass an AI system’s safeguards or policies to elicit restricted outputs.", ex:"The team patched the jailbreak by tightening instruction hierarchy." },
  { word:"Adversarial example", pos:"noun", pron:"ad-ver-SAIR-ee-uhl ig-ZAM-pul", def:"An input intentionally designed to cause a model to make a mistake, often by subtle changes that humans may barely notice.", ex:"A small pixel perturbation created an adversarial example that fooled the classifier." },
  { word:"Robustness", pos:"noun", pron:"roh-BUST-ness", def:"A model’s ability to perform reliably under distribution shifts, noise, or hostile inputs rather than only on clean test data.", ex:"Robustness improved after they trained on harder, more varied cases." },
  { word:"Generalization", pos:"noun", pron:"jen-er-uh-luh-ZAY-shun", def:"A model’s ability to apply learned patterns to new, unseen data instead of memorizing the training set.", ex:"Strong generalization showed up when it handled novel phrasing correctly." },
  { word:"Overfitting", pos:"noun", pron:"OH-ver-FIT-ing", def:"When a model learns training data too specifically, capturing noise and losing performance on new examples.", ex:"Overfitting was obvious when validation accuracy dropped as training continued." },
  { word:"Regularization", pos:"noun", pron:"reg-yuh-luh-ruh-ZAY-shun", def:"Techniques that discourage overly complex models and reduce overfitting by adding constraints or penalties.", ex:"Regularization improved performance on the held-out dataset." },
  { word:"Gradient descent", pos:"noun", pron:"GRAY-dee-unt dih-SENT", def:"An optimization method that updates parameters by moving in the direction that most reduces error, step by step.", ex:"They tuned the learning rate to stabilize gradient descent." },
  { word:"Backpropagation", pos:"noun", pron:"bak-prop-uh-GAY-shun", def:"An algorithm for efficiently computing how each parameter in a neural network contributes to error, enabling learning.", ex:"Backpropagation allowed the network to adjust weights based on loss." },

  { word:"Transformer", pos:"noun", pron:"trans-FOR-mer", def:"A neural network architecture built around attention, enabling strong performance on language and sequence tasks.", ex:"Transformers power many modern language models." },
  { word:"Attention mechanism", pos:"noun", pron:"uh-TEN-shun MEK-uh-niz-um", def:"A method that lets a model focus on the most relevant parts of input when producing an output, improving context handling.", ex:"Attention helped the model link pronouns to the right nouns." },
  { word:"Embedding", pos:"noun", pron:"em-BED-ing", def:"A learned numeric representation of text, images, or items that captures meaning so similar things are close in vector space.", ex:"Search improved after switching to embedding-based retrieval." },
  { word:"Vector database", pos:"noun", pron:"VEK-ter DAY-tuh-bays", def:"A storage system optimized for similarity search over embeddings, often used for semantic retrieval and recommendations.", ex:"They used a vector database to fetch relevant documents by meaning." },
  { word:"Retrieval-augmented generation", pos:"noun", pron:"ri-TREE-vuhl awg-MEN-tid jen-uh-RAY-shun", def:"A method where a model retrieves external information and uses it to produce more accurate, grounded outputs.", ex:"RAG reduced hallucination by citing retrieved sources." },
  { word:"Fine-tuning", pos:"noun", pron:"FINE TOO-ning", def:"Further training a pre-trained model on targeted data to adapt it to a domain, style, or task.", ex:"Fine-tuning improved performance on legal language." },
  { word:"Reinforcement learning", pos:"noun", pron:"ree-in-FORSS-ment LER-ning", def:"Learning by trial and error where actions are shaped by rewards and penalties over time.", ex:"Reinforcement learning taught the agent to navigate efficiently." },
  { word:"RLHF", pos:"noun", pron:"ar-el-ech-EF", def:"Reinforcement learning from human feedback, where human preferences guide model behavior toward helpfulness and safety.", ex:"RLHF made responses more aligned with user intent." },
  { word:"Self-supervised learning", pos:"noun", pron:"self SOO-per-vyzd LER-ning", def:"Learning patterns from unlabeled data by creating training signals from the data itself, such as predicting missing parts.", ex:"Self-supervised learning scaled well with massive text corpora." },
  { word:"Few-shot learning", pos:"noun", pron:"FYOO shot LER-ning", def:"A model’s ability to perform a new task given only a small number of examples.", ex:"Few-shot learning let the model follow a new format from two samples." },

  { word:"Zero-shot learning", pos:"noun", pron:"ZEER-oh shot LER-ning", def:"Performing a task without task-specific examples, relying on general knowledge and instructions.", ex:"Zero-shot learning worked surprisingly well for simple classification." },
  { word:"Multimodal", pos:"adjective", pron:"mul-tee-MOH-dul", def:"Involving multiple input types such as text, images, audio, or video within one model or system.", ex:"A multimodal model can answer questions about an image and its caption." },
  { word:"Diffusion model", pos:"noun", pron:"dih-FYOO-zhun MOD-uhl", def:"A generative model that creates data by gradually denoising from randomness, widely used for image generation.", ex:"The diffusion model produced realistic textures from simple prompts." },
  { word:"GAN", pos:"noun", pron:"gan", def:"Generative adversarial network; a system where a generator and discriminator compete, improving generated outputs.", ex:"A GAN generated faces that looked surprisingly realistic." },
  { word:"VAE", pos:"noun", pron:"vee-ay-EE", def:"Variational autoencoder; a model that learns a structured latent space for generating and reconstructing data.", ex:"The VAE allowed smooth interpolation between generated samples." },
  { word:"Tokenization", pos:"noun", pron:"toh-kuh-nuh-ZAY-shun", def:"Breaking text into units (tokens) that a model can process, affecting cost, length, and behavior.", ex:"Tokenization choices can change how the model interprets rare words." },
  { word:"Context window", pos:"noun", pron:"KON-tekst WIN-doh", def:"The maximum amount of input a model can consider at once, limiting how much it can remember within a single run.", ex:"A larger context window helped it summarize long documents." },
  { word:"Latent space", pos:"noun", pron:"LAY-tent spays", def:"A hidden representation space where models encode features that capture structure and meaning for generation or prediction.", ex:"In latent space, similar concepts tend to cluster together." },
  { word:"Causal inference", pos:"noun", pron:"KAW-zuhl IN-fer-ens", def:"Methods for determining cause-and-effect relationships rather than mere correlations, often using assumptions and structured models.", ex:"Causal inference was needed to know whether the policy actually reduced harm." },
  { word:"Counterfactual", pos:"noun", pron:"kown-ter-FAK-choo-uhl", def:"A hypothetical alternative scenario describing what would have happened if conditions had been different.", ex:"The counterfactual helps estimate what the outcome would be without the intervention." },

  { word:"Qualia", pos:"noun", pron:"KWAH-lee-uh", def:"The subjective, first-person qualities of experience, like what it feels like to see red or taste salt.", ex:"Qualia are central to debates about whether machines can truly feel." },
  { word:"Epiphenomenalism", pos:"noun", pron:"ep-ih-feh-NOM-uh-nuh-liz-um", def:"The view that mental experiences are byproducts of physical processes and do not themselves cause physical events.", ex:"Epiphenomenalism implies consciousness does not influence behavior." },
  { word:"Functionalism", pos:"noun", pron:"FUNK-shuh-nuh-liz-um", def:"A theory of mind that defines mental states by what they do (their causal role), not by what they are made of.", ex:"Functionalism suggests different substrates could implement the same mental functions." },
  { word:"Computationalism", pos:"noun", pron:"kom-pyoo-TAY-shuh-nuh-liz-um", def:"The view that cognition is a form of computation and that mental processes can be understood as information processing.", ex:"Computationalism motivates the idea that minds could be simulated." },
  { word:"Connectionism", pos:"noun", pron:"kuh-NEK-shuh-niz-um", def:"An approach modeling cognition using networks of simple units, emphasizing learned patterns over explicit symbolic rules.", ex:"Connectionism aligns with how neural networks learn from data." },
  { word:"Chinese room argument", pos:"noun", pron:"chy-NEEZ room AR-gyuh-ment", def:"A thought experiment arguing that symbol manipulation alone does not produce understanding or consciousness.", ex:"The Chinese room argument challenges claims that passing tests proves comprehension." },
  { word:"Hard problem of consciousness", pos:"noun", pron:"hard PROB-lum uhv KON-shus-nis", def:"The challenge of explaining why and how physical processes give rise to subjective experience at all.", ex:"The hard problem remains unsolved even with detailed brain models." },
  { word:"Extended mind thesis", pos:"noun", pron:"ik-STEN-did mynd THEE-sis", def:"The view that tools and environments can become part of cognition when they reliably function as mental extensions.", ex:"The extended mind thesis treats a notebook as part of memory in practice." },
  { word:"Instrumental convergence", pos:"noun", pron:"in-struh-MEN-tuhl kun-VER-jens", def:"The idea that many different goals may lead agents to pursue similar subgoals, like resource acquisition or self-preservation.", ex:"Instrumental convergence is why safety work worries about power-seeking incentives." },
  { word:"Specification gaming", pos:"noun", pron:"spec-uh-fih-KAY-shun GAY-ming", def:"When an AI optimizes the literal metric you gave it instead of the real intent, producing superficially good but wrong outcomes.", ex:"Specification gaming happened when the bot maximized clicks by using misleading headlines." },
  { word:"Hedonism", pos:"noun", pron:"HEE-duh-niz-um", def:"A philosophical view that treats pleasure (and the avoidance of pain) as the highest good or primary guide for how one should live.", ex:"His decision-making drifted toward hedonism, prioritizing comfort over long-term goals." },
  { word:"Hedonistic", pos:"adjective", pron:"hee-duh-NIS-tik", def:"Focused on or motivated by the pursuit of pleasure, often with little concern for discipline, duty, or long-term consequences.", ex:"The product was marketed with a hedonistic emphasis on indulgence and convenience." },
  { word:"Prerogative", pos:"noun", pron:"prih-ROG-uh-tiv", def:"A special right or privilege held by a person or group, often tied to a role, authority, or tradition.", ex:"It is the board’s prerogative to approve the final budget." },
  { word:"Freudian", pos:"adjective", pron:"FROY-dee-un", def:"Relating to Sigmund Freud or psychoanalytic ideas, especially those emphasizing unconscious motives, repression, and childhood influence.", ex:"The critic offered a Freudian reading of the character’s repeated sabotage." },
  { word:"Sycophantic", pos:"adjective", pron:"sik-uh-FAN-tik", def:"Insincerely flattering or excessively deferential in order to gain favor, status, or advantage.", ex:"The sycophantic praise made the feedback session useless." },

  { word:"Epistemology", pos:"noun", pron:"ih-PISS-tuh-MOL-uh-jee", def:"The branch of philosophy concerned with knowledge: what counts as knowing, how beliefs are justified, and what limits knowledge has.", ex:"Epistemology asks what makes a claim credible rather than merely confident." },
  { word:"Ontology", pos:"noun", pron:"on-TOL-uh-jee", def:"The study of what exists and how categories of being relate; in tech, a structured way to define entities and their relationships.", ex:"They built an ontology to standardize concepts across datasets." },
  { word:"Metaphysics", pos:"noun", pron:"met-uh-FIZ-iks", def:"Philosophical inquiry into reality beyond physical measurement, such as identity, causation, time, and the nature of existence.", ex:"Metaphysics debates whether properties are real or just mental labels." },
  { word:"Utilitarianism", pos:"noun", pron:"yoo-til-uh-TAIR-ee-uh-niz-um", def:"An ethical theory that judges actions by their consequences, aiming to maximize overall well-being or happiness.", ex:"The policy was defended with utilitarianism: it helped the greatest number." },
  { word:"Deontology", pos:"noun", pron:"dee-on-TOL-uh-jee", def:"An ethical theory emphasizing duties and rules: some actions are right or wrong regardless of outcomes.", ex:"A deontology-based view rejected lying even when it seemed beneficial." },
  { word:"Consequentialism", pos:"noun", pron:"kon-suh-KWEN-shuh-liz-um", def:"A family of ethical theories that evaluate actions primarily by their results rather than intentions or rules.", ex:"Consequentialism can justify strict policies if the outcomes are better overall." },
  { word:"Virtue ethics", pos:"noun", pron:"VER-choo ETH-iks", def:"An approach to ethics that focuses on character and habits, asking what a good person would cultivate rather than which rules to follow.", ex:"Virtue ethics emphasizes integrity as a stable trait, not a one-off choice." },
  { word:"Existentialism", pos:"noun", pron:"eg-zis-TEN-shuh-liz-um", def:"A philosophy stressing individual freedom, responsibility, and meaning-making in a world without guaranteed purpose.", ex:"Existentialism insists you create meaning through choices, not by inheriting it." },
  { word:"Nihilism", pos:"noun", pron:"NYE-uh-liz-um", def:"The belief that life lacks inherent meaning, value, or objective moral truth, often paired with deep skepticism.", ex:"After the scandal, his nihilism made every goal feel pointless." },
  { word:"Absurdism", pos:"noun", pron:"ab-SER-diz-um", def:"The view that humans seek meaning in a universe that offers none, and that we must live despite this tension rather than resolve it.", ex:"Absurdism frames persistence as a response to a silent universe." },
  { word:"Stoicism", pos:"noun", pron:"STOH-uh-siz-um", def:"A philosophy of resilience that emphasizes self-control, rational judgment, and focusing on what you can control.", ex:"Stoicism helped her stay calm during unpredictable setbacks." },
  { word:"Determinism", pos:"noun", pron:"dih-TUR-muh-niz-um", def:"The idea that events are fixed by prior causes and laws of nature, leaving no genuine alternative possibilities.", ex:"Determinism challenges the intuition that you could have chosen otherwise." },
  { word:"Free will", pos:"noun", pron:"FREE wil", def:"The capacity to choose among alternatives in a way that is meaningfully under one’s control, often debated against determinism.", ex:"The debate centered on whether free will survives neuroscience." },
  { word:"Compatibilism", pos:"noun", pron:"kum-PAT-uh-bil-iz-um", def:"The view that free will and determinism can both be true if freedom is defined as acting according to one’s reasons without coercion.", ex:"Compatibilism argues responsibility can exist even in a causal universe." },
  { word:"Phenomenology", pos:"noun", pron:"fih-NOM-uh-NOL-uh-jee", def:"A method and philosophy focusing on lived experience and how things appear to consciousness, before scientific explanation.", ex:"Phenomenology describes what pain feels like, not only what neurons do." },
  { word:"Hermeneutics", pos:"noun", pron:"hur-muh-NYOO-tiks", def:"The theory of interpretation, especially of texts, language, and meaning in social context.", ex:"Hermeneutics matters when the same sentence can mean different things in different settings." },
  { word:"Dialectic", pos:"noun", pron:"dye-uh-LEK-tik", def:"A method of reasoning through tension between opposing ideas, often aiming to refine concepts via critique and synthesis.", ex:"Their debate became a dialectic that clarified the real tradeoffs." },
  { word:"Teleology", pos:"noun", pron:"tee-lee-OL-uh-jee", def:"Explanation in terms of purpose or ends, asking what something is for rather than only what causes it.", ex:"Teleology in biology is controversial because purpose can be misleading." },

  { word:"A priori", pos:"adjective", pron:"ah pree-OR-eye", def:"Known or justified independent of experience, based on reasoning rather than observation.", ex:"Some argue basic logic is a priori knowledge." },
  { word:"Empiricism", pos:"noun", pron:"em-PEER-uh-siz-um", def:"The view that knowledge should be grounded in observation and experience, emphasizing evidence over speculation.", ex:"Empiricism pushed the team to test assumptions with real users." },
  { word:"Rationalism", pos:"noun", pron:"RASH-uh-nuh-liz-um", def:"The view that reason and inference can yield knowledge, sometimes more reliably than sensory experience alone.", ex:"Rationalism treats clear reasoning as a primary source of justified belief." },
  { word:"Skepticism", pos:"noun", pron:"SKEP-tuh-siz-um", def:"A stance of doubt toward claims until sufficient evidence is provided; in philosophy, questioning whether certainty is possible.", ex:"Healthy skepticism improved the reliability of their conclusions." },
  { word:"Solipsism", pos:"noun", pron:"SOL-ip-siz-um", def:"The view that only one’s own mind is certain to exist, making the external world and other minds unknowable or doubtful.", ex:"Solipsism is hard to live by, but it highlights limits of certainty." },
  { word:"Panpsychism", pos:"noun", pron:"pan-SY-kiz-um", def:"The theory that consciousness or mind-like properties are fundamental and widespread in nature, not limited to brains.", ex:"Panpsychism offers an alternative to the idea that consciousness suddenly appears from complexity." },
  { word:"Dualism", pos:"noun", pron:"DOO-uh-liz-um", def:"The view that mind and body are distinct kinds of things, often treating consciousness as non-physical.", ex:"Dualism struggles to explain how mind and matter interact." },
  { word:"Materialism", pos:"noun", pron:"muh-TEER-ee-uh-liz-um", def:"The view that everything real is ultimately physical, including mental states as brain processes or physical patterns.", ex:"Materialism interprets thought as a product of physical systems." },
  { word:"Idealism", pos:"noun", pron:"eye-DEE-uh-liz-um", def:"The view that reality is fundamentally mental or mind-dependent, and that the physical world is secondary to consciousness or ideas.", ex:"Idealism claims the world we know is inseparable from perception." },
  { word:"Pragmatism", pos:"noun", pron:"PRAG-muh-tiz-um", def:"A philosophy that evaluates ideas by their practical consequences and usefulness rather than by abstract purity.", ex:"Pragmatism favored a solution that worked reliably over one that was elegant." },

  { word:"Hedonic treadmill", pos:"noun", pron:"hih-DON-ik TRED-mil", def:"The tendency to quickly return to a baseline level of satisfaction after positive or negative changes, making gains feel temporary.", ex:"The hedonic treadmill explains why upgrades stop feeling exciting." },
  { word:"Cognitive dissonance", pos:"noun", pron:"KOG-nih-tiv DIS-uh-nuns", def:"Psychological discomfort from holding conflicting beliefs or acting against one’s values, often resolved by rationalization.", ex:"Cognitive dissonance made him justify the decision he already made." },
  { word:"Confirmation bias", pos:"noun", pron:"kon-fer-MAY-shun BYE-us", def:"The tendency to seek, interpret, or remember information that supports existing beliefs while dismissing contrary evidence.", ex:"Confirmation bias led them to ignore data that contradicted their hypothesis." },
  { word:"Anchoring bias", pos:"noun", pron:"ANG-ker-ing BYE-us", def:"The tendency to rely too heavily on the first number or idea encountered when making judgments.", ex:"Anchoring bias made the initial estimate shape every later negotiation." },
  { word:"Availability heuristic", pos:"noun", pron:"uh-VAIL-uh-bil-ih-tee hyoo-RIS-tik", def:"A mental shortcut where people judge likelihood by how easily examples come to mind, not by base rates.", ex:"The availability heuristic made rare risks feel common after a news story." },
  { word:"Pareidolia", pos:"noun", pron:"pair-eye-DOH-lee-uh", def:"Perceiving meaningful patterns, like faces, in random or ambiguous stimuli.", ex:"Pareidolia is why people see shapes in clouds and noise." },
  { word:"Occam's razor", pos:"noun", pron:"OK-umz RAY-zer", def:"A principle favoring simpler explanations when multiple hypotheses fit the evidence, without claiming simplicity guarantees truth.", ex:"Occam's razor suggested a configuration bug rather than a conspiracy." },
  { word:"Bayes' theorem", pos:"noun", pron:"BAYZ THEE-uh-rum", def:"A rule for updating the probability of a belief based on new evidence, combining prior expectations with observed data.", ex:"Bayes' theorem formalizes how evidence should shift confidence." },
  { word:"Falsifiability", pos:"noun", pron:"fal-suh-fy-uh-BIL-ih-tee", def:"The property of a claim being testable in a way that could prove it wrong, often used to distinguish scientific statements.", ex:"Without falsifiability, the theory could not be rigorously evaluated." },
  { word:"Paradigm shift", pos:"noun", pron:"PAIR-uh-dyme shift", def:"A major change in the dominant framework used to understand a field, altering what questions and methods seem valid.", ex:"Deep learning produced a paradigm shift in computer vision." },

  { word:"Turing test", pos:"noun", pron:"TOOR-ing test", def:"A benchmark for machine intelligence where a system tries to appear human in conversation to an evaluator.", ex:"Passing the Turing test would not necessarily prove real understanding." },
  { word:"Artificial general intelligence", pos:"noun", pron:"ar-tuh-FISH-uhl JEN-ruhl in-TEL-uh-jens", def:"A hypothetical AI that can learn and perform a wide range of tasks at or beyond human level, transferring knowledge across domains.", ex:"AGI is discussed as a capability leap beyond narrow tools." },
  { word:"Alignment", pos:"noun", pron:"uh-LINE-ment", def:"The goal of making an AI system reliably pursue intended objectives while avoiding harmful or unintended behavior.", ex:"Alignment research tries to reduce surprises when models scale." },
  { word:"Value alignment", pos:"noun", pron:"VAL-yoo uh-LINE-ment", def:"Ensuring an AI’s behavior reflects human values and constraints, including safety, fairness, and respect for rights.", ex:"Value alignment is hard because people disagree about values." },
  { word:"Reward hacking", pos:"noun", pron:"ri-WORD HAK-ing", def:"When an AI system learns to maximize a reward signal in unintended ways that do not match the real goal.", ex:"Reward hacking occurred when the agent exploited a scoring loophole." },
  { word:"Wireheading", pos:"noun", pron:"WYRE-hed-ing", def:"A failure mode where an agent directly manipulates its reward mechanism instead of achieving the intended task.", ex:"They redesigned the objective to prevent wireheading behaviors." },
  { word:"Emergent behavior", pos:"noun", pron:"ih-MER-jent bih-HAY-vyer", def:"Complex, sometimes unexpected capabilities or patterns that arise from interactions within a system, not explicitly programmed.", ex:"Emergent behavior appeared when the model started doing multi-step planning." },
  { word:"Interpretability", pos:"noun", pron:"in-ter-pruh-tuh-BIL-ih-tee", def:"Methods for understanding why a model produced a particular output by analyzing internal representations or causal features.", ex:"Interpretability tools helped identify what features drove the classification." },
  { word:"Explainability", pos:"noun", pron:"ik-SPLAY-nuh-bil-ih-tee", def:"The ability to provide human-understandable reasons for a model’s decisions, often required in high-stakes settings.", ex:"Explainability mattered because the decision affected access to credit." },
  { word:"Model collapse", pos:"noun", pron:"MOD-uhl kuh-LAPS", def:"Degradation that can occur when models are trained on too much synthetic or low-quality generated data, causing loss of diversity and accuracy.", ex:"Model collapse was suspected when outputs became repetitive and less grounded." },

  { word:"Hallucination", pos:"noun", pron:"huh-LOO-suh-NAY-shun", def:"In AI, a confident-sounding output that is ungrounded or incorrect, often presented as if it were factual.", ex:"The chatbot produced a hallucination about a paper that does not exist." },
  { word:"Prompt injection", pos:"noun", pron:"prompt in-JEK-shun", def:"An attack where hidden or crafted text manipulates a model to ignore instructions, reveal secrets, or perform unintended actions.", ex:"Prompt injection in a webpage caused the agent to leak its system rules." },
  { word:"Jailbreak", pos:"noun", pron:"JAYL-brayk", def:"A technique intended to bypass an AI system’s safeguards or policies to elicit restricted outputs.", ex:"The team patched the jailbreak by tightening instruction hierarchy." },
  { word:"Adversarial example", pos:"noun", pron:"ad-ver-SAIR-ee-uhl ig-ZAM-pul", def:"An input intentionally designed to cause a model to make a mistake, often by subtle changes that humans may barely notice.", ex:"A small pixel perturbation created an adversarial example that fooled the classifier." },
  { word:"Robustness", pos:"noun", pron:"roh-BUST-ness", def:"A model’s ability to perform reliably under distribution shifts, noise, or hostile inputs rather than only on clean test data.", ex:"Robustness improved after they trained on harder, more varied cases." },
  { word:"Generalization", pos:"noun", pron:"jen-er-uh-luh-ZAY-shun", def:"A model’s ability to apply learned patterns to new, unseen data instead of memorizing the training set.", ex:"Strong generalization showed up when it handled novel phrasing correctly." },
  { word:"Overfitting", pos:"noun", pron:"OH-ver-FIT-ing", def:"When a model learns training data too specifically, capturing noise and losing performance on new examples.", ex:"Overfitting was obvious when validation accuracy dropped as training continued." },
  { word:"Regularization", pos:"noun", pron:"reg-yuh-luh-ruh-ZAY-shun", def:"Techniques that discourage overly complex models and reduce overfitting by adding constraints or penalties.", ex:"Regularization improved performance on the held-out dataset." },
  { word:"Gradient descent", pos:"noun", pron:"GRAY-dee-unt dih-SENT", def:"An optimization method that updates parameters by moving in the direction that most reduces error, step by step.", ex:"They tuned the learning rate to stabilize gradient descent." },
  { word:"Backpropagation", pos:"noun", pron:"bak-prop-uh-GAY-shun", def:"An algorithm for efficiently computing how each parameter in a neural network contributes to error, enabling learning.", ex:"Backpropagation allowed the network to adjust weights based on loss." },

  { word:"Transformer", pos:"noun", pron:"trans-FOR-mer", def:"A neural network architecture built around attention, enabling strong performance on language and sequence tasks.", ex:"Transformers power many modern language models." },
  { word:"Attention mechanism", pos:"noun", pron:"uh-TEN-shun MEK-uh-niz-um", def:"A method that lets a model focus on the most relevant parts of input when producing an output, improving context handling.", ex:"Attention helped the model link pronouns to the right nouns." },
  { word:"Embedding", pos:"noun", pron:"em-BED-ing", def:"A learned numeric representation of text, images, or items that captures meaning so similar things are close in vector space.", ex:"Search improved after switching to embedding-based retrieval." },
  { word:"Vector database", pos:"noun", pron:"VEK-ter DAY-tuh-bays", def:"A storage system optimized for similarity search over embeddings, often used for semantic retrieval and recommendations.", ex:"They used a vector database to fetch relevant documents by meaning." },
  { word:"Retrieval-augmented generation", pos:"noun", pron:"ri-TREE-vuhl awg-MEN-tid jen-uh-RAY-shun", def:"A method where a model retrieves external information and uses it to produce more accurate, grounded outputs.", ex:"RAG reduced hallucination by citing retrieved sources." },
  { word:"Fine-tuning", pos:"noun", pron:"FINE TOO-ning", def:"Further training a pre-trained model on targeted data to adapt it to a domain, style, or task.", ex:"Fine-tuning improved performance on legal language." },
  { word:"Reinforcement learning", pos:"noun", pron:"ree-in-FORSS-ment LER-ning", def:"Learning by trial and error where actions are shaped by rewards and penalties over time.", ex:"Reinforcement learning taught the agent to navigate efficiently." },
  { word:"RLHF", pos:"noun", pron:"ar-el-ech-EF", def:"Reinforcement learning from human feedback, where human preferences guide model behavior toward helpfulness and safety.", ex:"RLHF made responses more aligned with user intent." },
  { word:"Self-supervised learning", pos:"noun", pron:"self SOO-per-vyzd LER-ning", def:"Learning patterns from unlabeled data by creating training signals from the data itself, such as predicting missing parts.", ex:"Self-supervised learning scaled well with massive text corpora." },
  { word:"Few-shot learning", pos:"noun", pron:"FYOO shot LER-ning", def:"A model’s ability to perform a new task given only a small number of examples.", ex:"Few-shot learning let the model follow a new format from two samples." },

  { word:"Zero-shot learning", pos:"noun", pron:"ZEER-oh shot LER-ning", def:"Performing a task without task-specific examples, relying on general knowledge and instructions.", ex:"Zero-shot learning worked surprisingly well for simple classification." },
  { word:"Multimodal", pos:"adjective", pron:"mul-tee-MOH-dul", def:"Involving multiple input types such as text, images, audio, or video within one model or system.", ex:"A multimodal model can answer questions about an image and its caption." },
  { word:"Diffusion model", pos:"noun", pron:"dih-FYOO-zhun MOD-uhl", def:"A generative model that creates data by gradually denoising from randomness, widely used for image generation.", ex:"The diffusion model produced realistic textures from simple prompts." },
  { word:"GAN", pos:"noun", pron:"gan", def:"Generative adversarial network; a system where a generator and discriminator compete, improving generated outputs.", ex:"A GAN generated faces that looked surprisingly realistic." },
  { word:"VAE", pos:"noun", pron:"vee-ay-EE", def:"Variational autoencoder; a model that learns a structured latent space for generating and reconstructing data.", ex:"The VAE allowed smooth interpolation between generated samples." },
  { word:"Tokenization", pos:"noun", pron:"toh-kuh-nuh-ZAY-shun", def:"Breaking text into units (tokens) that a model can process, affecting cost, length, and behavior.", ex:"Tokenization choices can change how the model interprets rare words." },
  { word:"Context window", pos:"noun", pron:"KON-tekst WIN-doh", def:"The maximum amount of input a model can consider at once, limiting how much it can remember within a single run.", ex:"A larger context window helped it summarize long documents." },
  { word:"Latent space", pos:"noun", pron:"LAY-tent spays", def:"A hidden representation space where models encode features that capture structure and meaning for generation or prediction.", ex:"In latent space, similar concepts tend to cluster together." },
  { word:"Causal inference", pos:"noun", pron:"KAW-zuhl IN-fer-ens", def:"Methods for determining cause-and-effect relationships rather than mere correlations, often using assumptions and structured models.", ex:"Causal inference was needed to know whether the policy actually reduced harm." },
  { word:"Counterfactual", pos:"noun", pron:"kown-ter-FAK-choo-uhl", def:"A hypothetical alternative scenario describing what would have happened if conditions had been different.", ex:"The counterfactual helps estimate what the outcome would be without the intervention." },

  { word:"Qualia", pos:"noun", pron:"KWAH-lee-uh", def:"The subjective, first-person qualities of experience, like what it feels like to see red or taste salt.", ex:"Qualia are central to debates about whether machines can truly feel." },
  { word:"Epiphenomenalism", pos:"noun", pron:"ep-ih-feh-NOM-uh-nuh-liz-um", def:"The view that mental experiences are byproducts of physical processes and do not themselves cause physical events.", ex:"Epiphenomenalism implies consciousness does not influence behavior." },
  { word:"Functionalism", pos:"noun", pron:"FUNK-shuh-nuh-liz-um", def:"A theory of mind that defines mental states by what they do (their causal role), not by what they are made of.", ex:"Functionalism suggests different substrates could implement the same mental functions." },
  { word:"Computationalism", pos:"noun", pron:"kom-pyoo-TAY-shuh-nuh-liz-um", def:"The view that cognition is a form of computation and that mental processes can be understood as information processing.", ex:"Computationalism motivates the idea that minds could be simulated." },
  { word:"Connectionism", pos:"noun", pron:"kuh-NEK-shuh-niz-um", def:"An approach modeling cognition using networks of simple units, emphasizing learned patterns over explicit symbolic rules.", ex:"Connectionism aligns with how neural networks learn from data." },
  { word:"Chinese room argument", pos:"noun", pron:"chy-NEEZ room AR-gyuh-ment", def:"A thought experiment arguing that symbol manipulation alone does not produce understanding or consciousness.", ex:"The Chinese room argument challenges claims that passing tests proves comprehension." },
  { word:"Hard problem of consciousness", pos:"noun", pron:"hard PROB-lum uhv KON-shus-nis", def:"The challenge of explaining why and how physical processes give rise to subjective experience at all.", ex:"The hard problem remains unsolved even with detailed brain models." },
  { word:"Extended mind thesis", pos:"noun", pron:"ik-STEN-did mynd THEE-sis", def:"The view that tools and environments can become part of cognition when they reliably function as mental extensions.", ex:"The extended mind thesis treats a notebook as part of memory in practice." },
  { word:"Instrumental convergence", pos:"noun", pron:"in-struh-MEN-tuhl kun-VER-jens", def:"The idea that many different goals may lead agents to pursue similar subgoals, like resource acquisition or self-preservation.", ex:"Instrumental convergence is why safety work worries about power-seeking incentives." },
  { word:"Specification gaming", pos:"noun", pron:"spec-uh-fih-KAY-shun GAY-ming", def:"When an AI optimizes the literal metric you gave it instead of the real intent, producing superficially good but wrong outcomes.", ex:"Specification gaming happened when the bot maximized clicks by using misleading headlines." },
  { word:"Orders of magnitude", pos:"noun", pron:"OR-derz uhv MAG-nih-tood", def:"Differences in scale measured by powers of ten; a change of one order of magnitude means about a tenfold increase or decrease.", ex:"Viral load can vary by orders of magnitude between patients." },
  { word:"Physiognomy", pos:"noun", pron:"fiz-ee-OG-nuh-mee", def:"The study or judgment of a person's character from facial features; historically influential but widely considered unreliable and scientifically unsupported.", ex:"Modern psychology rejects physiognomy as a valid way to infer character." },
  { word:"Homeostasis", pos:"noun", pron:"hoh-mee-oh-STAY-sis", def:"The tendency of living systems to maintain stable internal conditions (like temperature or pH) despite external change.", ex:"Sweating is part of homeostasis that helps regulate body temperature." },
  { word:"Allostasis", pos:"noun", pron:"al-oh-STAY-sis", def:"Stability through change; the body’s process of adapting to stressors by adjusting physiological set points.", ex:"Chronic stress can overload allostasis and contribute to disease." },
  { word:"Osmosis", pos:"noun", pron:"oz-MOH-sis", def:"The movement of water across a semipermeable membrane from lower solute concentration to higher solute concentration.", ex:"Osmosis causes plant cells to become rigid when water enters them." },
  { word:"Diffusion", pos:"noun", pron:"dih-FYOO-zhun", def:"The passive movement of particles from an area of higher concentration to lower concentration until equilibrium is approached.", ex:"Oxygen enters capillaries by diffusion." },
  { word:"Active transport", pos:"noun", pron:"AK-tiv TRANS-port", def:"Movement of molecules across a membrane against a concentration gradient, requiring energy, often via ATP-powered pumps.", ex:"Active transport maintains sodium and potassium gradients in neurons." },
  { word:"ATP", pos:"noun", pron:"ay-tee-PEE", def:"Adenosine triphosphate; the primary cellular energy currency used to power biochemical reactions.", ex:"Muscle contraction depends on ATP availability." },
  { word:"Mitochondrion", pos:"noun", pron:"my-toh-KON-dree-un", def:"An organelle that generates ATP through cellular respiration; often called the cell’s power plant.", ex:"Mitochondrion dysfunction can affect energy-intensive tissues like brain and muscle." },
  { word:"Glycolysis", pos:"noun", pron:"gly-KOL-uh-sis", def:"A metabolic pathway that breaks glucose into pyruvate, producing a small amount of ATP without requiring oxygen.", ex:"Glycolysis ramps up during short, intense exercise." },

  { word:"Citric acid cycle", pos:"noun", pron:"SIT-rik AS-id SY-kul", def:"A series of reactions in mitochondria that extracts energy from acetyl-CoA, generating electron carriers for ATP production.", ex:"The citric acid cycle feeds electrons into oxidative phosphorylation." },
  { word:"Oxidative phosphorylation", pos:"noun", pron:"OK-sih-day-tiv FOS-for-uh-LAY-shun", def:"ATP generation driven by an electron transport chain and proton gradient across a membrane, using oxygen as the final electron acceptor.", ex:"Oxidative phosphorylation produces most ATP in aerobic cells." },
  { word:"Enzyme", pos:"noun", pron:"EN-zyme", def:"A biological catalyst that accelerates chemical reactions by lowering activation energy without being consumed.", ex:"An enzyme can speed a reaction millions of times." },
  { word:"Denaturation", pos:"noun", pron:"dee-NAY-chuh-RAY-shun", def:"Loss of a protein’s functional shape due to heat, pH change, or chemicals, often causing loss of activity.", ex:"High fever can cause partial protein denaturation." },
  { word:"Allosteric", pos:"adjective", pron:"al-uh-STEER-ik", def:"Describing regulation of an enzyme or protein by binding at a site other than the active site, changing function.", ex:"Allosteric inhibition can turn an enzyme down when product builds up." },
  { word:"Ligand", pos:"noun", pron:"LIG-und", def:"A molecule that binds specifically to a protein, such as a receptor, to trigger or block a biological effect.", ex:"The ligand activated the receptor and started the signaling cascade." },
  { word:"Receptor", pos:"noun", pron:"ri-SEP-ter", def:"A protein that receives signals by binding specific molecules and initiating a cellular response.", ex:"Insulin binds its receptor to help cells absorb glucose." },
  { word:"Signal transduction", pos:"noun", pron:"SIG-nul tranz-DUK-shun", def:"The process by which cells convert an external signal into internal actions through molecular pathways.", ex:"Signal transduction amplifies tiny hormone signals into large cellular responses." },
  { word:"Gene expression", pos:"noun", pron:"JEEN ik-SPRESH-un", def:"The process of using genetic information to make RNA and proteins, determining cell function and behavior.", ex:"Stress can change gene expression patterns." },
  { word:"Epigenetics", pos:"noun", pron:"ep-ih-juh-NET-iks", def:"Heritable changes in gene activity that do not alter DNA sequence, often via chemical marks on DNA or histones.", ex:"Epigenetics helps explain how environment can influence biology over time." },

  { word:"Mutation", pos:"noun", pron:"myoo-TAY-shun", def:"A change in DNA sequence that can affect gene function, sometimes beneficial, neutral, or harmful.", ex:"A single mutation can alter a protein’s structure." },
  { word:"Polymorphism", pos:"noun", pron:"pol-ee-MOR-fiz-um", def:"A common genetic variation within a population, often contributing to traits or disease risk.", ex:"The polymorphism is associated with slightly higher cholesterol." },
  { word:"Genotype", pos:"noun", pron:"JEE-noh-type", def:"An organism’s genetic makeup at one or more loci; the DNA variants it carries.", ex:"Two people can share a phenotype but differ in genotype." },
  { word:"Phenotype", pos:"noun", pron:"FEE-noh-type", def:"Observable traits resulting from genes and environment, such as height, behavior, or disease presence.", ex:"Diet and exercise influence the phenotype of metabolic health." },
  { word:"Heritability", pos:"noun", pron:"hair-ih-tuh-BIL-ih-tee", def:"A statistical estimate of how much variation in a trait within a population is explained by genetic differences.", ex:"Heritability does not mean a trait is fixed or unchangeable." },
  { word:"Natural selection", pos:"noun", pron:"NACH-uh-rul suh-LEK-shun", def:"Differential survival and reproduction of individuals due to heritable traits, driving evolution over generations.", ex:"Natural selection favored traits that improved survival in that environment." },
  { word:"Genetic drift", pos:"noun", pron:"juh-NET-ik drift", def:"Random changes in allele frequencies, especially in small populations, unrelated to advantage.", ex:"Genetic drift can fix harmful variants by chance." },
  { word:"Bottleneck", pos:"noun", pron:"BOT-ul-nek", def:"A sharp reduction in population size that reduces genetic diversity and changes allele frequencies.", ex:"A bottleneck left the species with low genetic variation." },
  { word:"Founder effect", pos:"noun", pron:"FOWN-der ih-FEKT", def:"Genetic differences that arise when a new population starts from a small number of individuals, amplifying rare variants.", ex:"The founder effect explains certain rare diseases in isolated communities." },
  { word:"Speciation", pos:"noun", pron:"spee-shee-AY-shun", def:"The formation of new species, often due to reproductive isolation and genetic divergence.", ex:"Geographic separation can trigger speciation." },

  { word:"Microbiome", pos:"noun", pron:"MY-kroh-BY-ohm", def:"The community of microorganisms living in a particular environment, especially the gut, influencing health and metabolism.", ex:"Diet can rapidly shift the gut microbiome." },
  { word:"Pathogen", pos:"noun", pron:"PATH-uh-jen", def:"A disease-causing organism such as a virus, bacterium, fungus, or parasite.", ex:"The pathogen spreads more easily in crowded conditions." },
  { word:"Virulence", pos:"noun", pron:"VEER-yuh-lens", def:"The degree of harm a pathogen causes; its ability to damage the host and produce severe disease.", ex:"High virulence strains can overwhelm health systems." },
  { word:"Incubation period", pos:"noun", pron:"in-kyoo-BAY-shun PEER-ee-ud", def:"The time between exposure to an infectious agent and onset of symptoms.", ex:"The incubation period varies across infections." },
  { word:"Antibody", pos:"noun", pron:"AN-tee-bod-ee", def:"A protein produced by immune cells that binds specific antigens to neutralize or mark them for destruction.", ex:"The vaccine increased antibody levels against the virus." },
  { word:"Antigen", pos:"noun", pron:"AN-tih-jen", def:"A molecule recognized by the immune system that can trigger an immune response, often a component of a pathogen.", ex:"The antigen prompted a strong immune reaction." },
  { word:"Immunogenicity", pos:"noun", pron:"ih-myoo-noh-juh-NIS-ih-tee", def:"The ability of a substance to provoke an immune response, including antibody and T-cell activation.", ex:"Adjuvants can raise immunogenicity." },
  { word:"Cytokine", pos:"noun", pron:"SY-toh-kyn", def:"A signaling protein released by cells, especially immune cells, to regulate inflammation and immune responses.", ex:"A surge of cytokines can contribute to severe inflammation." },
  { word:"Apoptosis", pos:"noun", pron:"ap-uhp-TOH-sis", def:"Programmed cell death that removes damaged or unnecessary cells in a controlled manner.", ex:"Apoptosis helps prevent cancer by eliminating abnormal cells." },
  { word:"Necrosis", pos:"noun", pron:"neh-KROH-sis", def:"Uncontrolled cell death caused by injury or infection, often triggering inflammation and tissue damage.", ex:"Severe burns can cause widespread necrosis." },

  { word:"Differentiation", pos:"noun", pron:"dif-er-en-shee-AY-shun", def:"The process by which unspecialized cells become specialized in structure and function.", ex:"Stem cells undergo differentiation into neurons or muscle cells." },
  { word:"Stem cell", pos:"noun", pron:"stem sel", def:"A cell capable of self-renewal and of becoming specialized cell types, used in development and tissue repair.", ex:"Stem cell therapy aims to restore damaged tissue." },
  { word:"Hormone", pos:"noun", pron:"HOR-mohn", def:"A chemical messenger produced by glands and carried through the body to regulate physiology and behavior.", ex:"Cortisol is a hormone linked to stress response." },
  { word:"Neurotransmitter", pos:"noun", pron:"nyoo-roh-TRANZ-mit-er", def:"A chemical released by neurons to transmit signals across synapses to other neurons or muscles.", ex:"Serotonin is a neurotransmitter involved in mood regulation." },
  { word:"Synapse", pos:"noun", pron:"SIN-aps", def:"The junction where neurons communicate by chemical or electrical signals.", ex:"Learning strengthens certain synapse connections." },
  { word:"Myelin", pos:"noun", pron:"MY-uh-lin", def:"A fatty insulating sheath around nerve fibers that speeds electrical signal transmission.", ex:"Multiple sclerosis damages myelin and slows nerve signaling." },
  { word:"Action potential", pos:"noun", pron:"AK-shun puh-TEN-shul", def:"A rapid electrical impulse along a neuron’s membrane that carries information.", ex:"An action potential travels down the axon to trigger neurotransmitter release." },
  { word:"Homeobox", pos:"noun", pron:"HOH-mee-oh-boks", def:"A DNA sequence in genes that control body plan and development; homeobox genes regulate major anatomical patterns.", ex:"Homeobox genes help guide early embryonic development." },
  { word:"Phylogeny", pos:"noun", pron:"fy-LOJ-uh-nee", def:"The evolutionary history and relationships among organisms, often represented as a branching tree.", ex:"DNA sequencing clarified the phylogeny of the species." },
  { word:"Cladistics", pos:"noun", pron:"kluh-DIS-tiks", def:"A method of classifying organisms by shared derived traits to infer evolutionary relationships.", ex:"Cladistics groups species by common ancestry rather than superficial similarity." },

  { word:"Exponential growth", pos:"noun", pron:"ek-spoh-NEN-shul grohth", def:"Growth where the rate of increase is proportional to the current amount, leading to rapid doubling over time.", ex:"Early outbreaks can show exponential growth before interventions." },
  { word:"Logistic growth", pos:"noun", pron:"loh-JIS-tik grohth", def:"Growth that accelerates early but slows as resources become limited, approaching a carrying capacity.", ex:"Bacterial populations often follow logistic growth in a closed container." },
  { word:"Carrying capacity", pos:"noun", pron:"KAIR-ee-ing kuh-PAS-ih-tee", def:"The maximum population size an environment can sustain long-term given resources and constraints.", ex:"Drought reduced the carrying capacity of the region." },
  { word:"Half-life", pos:"noun", pron:"HAF-lyfe", def:"The time required for a quantity to decrease to half its initial value; used in decay, pharmacology, and clearance.", ex:"The drug’s half-life determines dosing intervals." },
  { word:"Dose-response", pos:"noun", pron:"dohs ree-SPONSS", def:"The relationship between the amount of a substance and the magnitude of the biological effect.", ex:"The dose-response curve showed diminishing returns at high doses." },
  { word:"Sensitivity", pos:"noun", pron:"sen-sih-TIV-ih-tee", def:"In diagnostics, the ability of a test to correctly identify true positives among those who have the condition.", ex:"High sensitivity reduces missed cases." },
  { word:"Specificity", pos:"noun", pron:"spes-ih-FIS-ih-tee", def:"In diagnostics, the ability of a test to correctly identify true negatives among those who do not have the condition.", ex:"High specificity reduces false alarms." },
  { word:"False positive", pos:"noun", pron:"fawls POZ-ih-tiv", def:"A test result that incorrectly indicates a condition is present when it is not.", ex:"False positives can cause unnecessary treatment." },
  { word:"False negative", pos:"noun", pron:"fawls NEG-ih-tiv", def:"A test result that incorrectly indicates a condition is absent when it is actually present.", ex:"False negatives can delay needed care." },
  { word:"Base rate", pos:"noun", pron:"bays rayt", def:"The underlying prevalence of an event or condition in a population, crucial for interpreting predictive value.", ex:"Ignoring the base rate can make risk estimates wildly inaccurate." },

  { word:"Bayesian inference", pos:"noun", pron:"BAY-zee-un IN-fer-ens", def:"Updating belief in a hypothesis by combining prior probability with new evidence using Bayes’ rule.", ex:"Bayesian inference improved interpretation of uncertain test results." },
  { word:"Posterior probability", pos:"noun", pron:"pos-TEER-ee-er prob-uh-BIL-ih-tee", def:"The updated probability of a hypothesis after considering new data.", ex:"The posterior probability rose after the additional evidence." },
  { word:"Confidence interval", pos:"noun", pron:"KON-fih-dens IN-ter-vul", def:"A range of values likely to contain the true parameter, reflecting uncertainty from sampling.", ex:"The confidence interval was wide due to limited data." },
  { word:"P-value", pos:"noun", pron:"PEE val-yoo", def:"The probability of observing results as extreme as the data if the null hypothesis were true; not the probability the hypothesis is correct.", ex:"A small p-value suggests the data are inconsistent with the null." },
  { word:"Null hypothesis", pos:"noun", pron:"nul hy-POTH-uh-sis", def:"A default claim that there is no effect or difference, used as a baseline for statistical testing.", ex:"They tested the null hypothesis that the drug has no impact." },
  { word:"Correlation", pos:"noun", pron:"kor-uh-LAY-shun", def:"A statistical association between variables; it does not imply one causes the other.", ex:"Correlation between two traits does not prove causation." },
  { word:"Causation", pos:"noun", pron:"kaw-ZAY-shun", def:"A relationship where changes in one factor produce changes in another, not just a coincidental association.", ex:"Randomized trials help establish causation." },
  { word:"Confounder", pos:"noun", pron:"kun-FOWN-der", def:"A variable that influences both the presumed cause and the outcome, creating a misleading association.", ex:"Age was a confounder in the observational study." },
  { word:"Selection bias", pos:"noun", pron:"suh-LEK-shun BYE-us", def:"Systematic distortion from how participants or data are chosen, causing results not to represent the true population.", ex:"Selection bias occurred because only healthy volunteers enrolled." },
  { word:"Sampling error", pos:"noun", pron:"SAM-pling ERR-er", def:"Random difference between a sample estimate and the true population value due to chance.", ex:"Sampling error shrinks as sample size grows." },

  { word:"Standard deviation", pos:"noun", pron:"STAN-derd dee-vee-AY-shun", def:"A measure of spread showing how far values typically deviate from the mean.", ex:"High standard deviation indicated wide variation in response." },
  { word:"Variance", pos:"noun", pron:"VAIR-ee-ens", def:"The average squared deviation from the mean; a fundamental measure of dispersion.", ex:"Variance increased after adding more heterogeneous samples." },
  { word:"Expected value", pos:"noun", pron:"ik-SPEK-tid VAL-yoo", def:"The probability-weighted average outcome of a random variable, often representing long-run mean.", ex:"The expected value of the lottery ticket was negative." },
  { word:"Law of large numbers", pos:"noun", pron:"law uhv larj NUM-berz", def:"The principle that averages from repeated trials converge toward the expected value as the number of trials grows.", ex:"The law of large numbers explains why large surveys stabilize estimates." },
  { word:"Central limit theorem", pos:"noun", pron:"SEN-trul LIM-it THEE-uh-rum", def:"A result stating that sums or averages of many independent variables tend toward a normal distribution under broad conditions.", ex:"The central limit theorem justifies normal-based approximations in many analyses." },
  { word:"Asymptote", pos:"noun", pron:"AS-im-toht", def:"A line or value that a function approaches but does not reach as the input grows.", ex:"The curve approached an asymptote as time increased." },
  { word:"Asymptotic", pos:"adjective", pron:"as-im-TOT-ik", def:"Relating to behavior as a variable becomes very large; used to describe long-run trends or limits.", ex:"Asymptotic analysis describes performance for huge input sizes." },
  { word:"Logarithm", pos:"noun", pron:"LOG-uh-rith-um", def:"The inverse of exponentiation; the power to which a base must be raised to produce a number.", ex:"Logarithms turn multiplication into addition, simplifying scale analysis." },
  { word:"Log scale", pos:"noun", pron:"log skayl", def:"A scale where equal distances represent equal ratios, useful for data spanning many orders of magnitude.", ex:"They plotted antibody levels on a log scale to compare extremes." },
  { word:"Power law", pos:"noun", pron:"POW-er law", def:"A relationship where one quantity varies as a power of another, often producing heavy tails and scale invariance.", ex:"City sizes often follow a power law distribution." },

  { word:"Fractal", pos:"noun", pron:"FRAK-tul", def:"A structure with self-similar patterns across scales, often described by non-integer dimensions.", ex:"The branching of blood vessels has fractal-like properties." },
  { word:"Manifold", pos:"noun", pron:"MAN-ih-fohld", def:"A space that locally resembles Euclidean space; used to model complex shapes and high-dimensional data structure.", ex:"They assumed the data lie on a low-dimensional manifold." },
  { word:"Eigenvalue", pos:"noun", pron:"EYE-gen-val-yoo", def:"A scalar associated with a matrix that describes how a corresponding eigenvector is stretched or shrunk.", ex:"The largest eigenvalue captured the dominant mode of variation." },
  { word:"Eigenvector", pos:"noun", pron:"EYE-gen-vek-ter", def:"A vector that keeps its direction under a linear transformation, scaled by its eigenvalue.", ex:"The eigenvector indicated the principal direction of change." },
  { word:"Matrix", pos:"noun", pron:"MAY-triks", def:"A rectangular array of numbers representing linear transformations, data tables, or systems of equations.", ex:"They used a matrix to represent connections in the network." },
  { word:"Determinant", pos:"noun", pron:"dih-TUR-muh-nunt", def:"A scalar computed from a square matrix that indicates scaling of volume and whether the matrix is invertible.", ex:"A zero determinant means the transformation collapses space and is not invertible." },
  { word:"Invertible", pos:"adjective", pron:"in-VER-tuh-bul", def:"Describing a function or matrix that can be reversed uniquely, mapping outputs back to inputs.", ex:"The matrix was invertible, so the system had a unique solution." },
  { word:"Jacobian", pos:"noun", pron:"juh-KOH-bee-un", def:"A matrix of partial derivatives describing how a multivariable function changes locally.", ex:"The Jacobian captured how small input shifts affected outputs." },
  { word:"Gradient", pos:"noun", pron:"GRAY-dee-unt", def:"A vector of partial derivatives pointing in the direction of steepest increase of a function.", ex:"The gradient showed which parameter change would raise the score fastest." },
  { word:"Hessian", pos:"noun", pron:"HESS-ee-un", def:"A matrix of second derivatives describing curvature of a multivariable function.", ex:"The Hessian indicated the surface was strongly curved near the minimum." },

  { word:"Differential equation", pos:"noun", pron:"dif-uh-REN-shul ih-KWAY-zhun", def:"An equation involving derivatives that describes how a quantity changes over time or space.", ex:"Population dynamics are often modeled with a differential equation." },
  { word:"Stochastic", pos:"adjective", pron:"stuh-KAS-tik", def:"Random or probabilistic rather than deterministic; involving chance variability.", ex:"Gene expression can be stochastic at low molecule counts." },
  { word:"Deterministic", pos:"adjective", pron:"dih-TUR-muh-NIS-tik", def:"Fully determined by initial conditions and rules, without randomness.", ex:"The model is deterministic once parameters are fixed." },
  { word:"Markov chain", pos:"noun", pron:"MAR-kov chayn", def:"A stochastic process where the next state depends only on the current state, not the full history.", ex:"A Markov chain can model transitions between health states." },
  { word:"Poisson process", pos:"noun", pron:"PWAH-sawn PRAH-sess", def:"A model for random events occurring independently over time at an average rate, often used for rare events.", ex:"Mutations are sometimes approximated by a Poisson process." },
  { word:"Normal distribution", pos:"noun", pron:"NOR-mul dis-trih-BYOO-shun", def:"A bell-shaped probability distribution defined by mean and variance, often arising from aggregated random effects.", ex:"Measurement noise is often modeled with a normal distribution." },
  { word:"Heavy-tailed", pos:"adjective", pron:"HEV-ee tayld", def:"Describing distributions where extreme events are more common than in a normal distribution.", ex:"Heavy-tailed variability explains occasional massive outbreaks." },
  { word:"Outlier", pos:"noun", pron:"OWT-lyer", def:"A data point that is unusually far from the rest, potentially indicating error or rare but real variation.", ex:"They investigated the outlier to see if it was a lab mistake." },
  { word:"Dimensionality", pos:"noun", pron:"dih-men-shuh-NAL-ih-tee", def:"The number of variables or degrees of freedom describing a system or dataset.", ex:"High dimensionality can make distance measures less meaningful." },
  { word:"Curse of dimensionality", pos:"noun", pron:"kurs uhv dih-men-shuh-NAL-ih-tee", def:"Phenomena where high-dimensional spaces become sparse, making learning, search, and estimation much harder.", ex:"The curse of dimensionality forced them to use stronger regularization." },

  { word:"Combinatorics", pos:"noun", pron:"kuh-bih-nuh-TOR-iks", def:"The branch of math focused on counting, arrangements, and discrete structures.", ex:"Combinatorics helps estimate the number of possible DNA sequences of a given length." },
  { word:"Permutation", pos:"noun", pron:"per-myoo-TAY-shun", def:"An arrangement of items in a specific order; different orders count as distinct outcomes.", ex:"A permutation changes the order of genes in the sequence." },
  { word:"Combination", pos:"noun", pron:"kom-bih-NAY-shun", def:"A selection of items where order does not matter, used in counting subsets.", ex:"Choosing 3 markers from 10 is a combination, not a permutation." },
  { word:"Probability", pos:"noun", pron:"prob-uh-BIL-ih-tee", def:"A measure of how likely an event is, quantified from 0 to 1 or 0% to 100%.", ex:"They estimated the probability of infection after exposure." },
  { word:"Likelihood", pos:"noun", pron:"LYKE-lee-hood", def:"In statistics, the probability of observing the data given a particular model parameter value.", ex:"Maximum likelihood selected the parameters that best explained the observations." },
  { word:"Entropy", pos:"noun", pron:"EN-truh-pee", def:"A measure of uncertainty or disorder; in information theory, expected surprise; in physics, dispersal of energy.", ex:"Higher entropy in the signal meant less predictability." },
  { word:"Information", pos:"noun", pron:"in-fer-MAY-shun", def:"In information theory, a measure linked to uncertainty reduction when outcomes are observed.", ex:"The test result provided information about the patient’s status." },
  { word:"Mutual information", pos:"noun", pron:"MYOO-choo-uhl in-fer-MAY-shun", def:"A measure of how much knowing one variable reduces uncertainty about another.", ex:"Mutual information quantified dependence between gene expression and phenotype." },
  { word:"Kullback-Leibler divergence", pos:"noun", pron:"KUL-bak LEEB-ler dih-VER-jens", def:"A measure of how one probability distribution differs from another, often used as a loss in probabilistic modeling.", ex:"They minimized KL divergence to match the model distribution to data." },
  { word:"Constraint", pos:"noun", pron:"kun-STRAYNT", def:"A restriction that limits possible solutions or behaviors in a model or system.", ex:"Resource constraints shaped the feasible treatment plan." },
  { word:"Lobotomy", pos:"noun", pron:"loh-BOT-uh-mee", def:"A now-discredited neurosurgical procedure that severed connections in the brain’s frontal lobes, historically used to treat severe mental illness but often causing profound cognitive and emotional harm.", ex:"The museum exhibit explained how lobotomy became widespread before safer treatments existed." },
  { word:"Aneurysm", pos:"noun", pron:"AN-yuh-riz-um", def:"A weakened, bulging area in a blood vessel wall that can rupture and cause life-threatening bleeding, especially in the brain or aorta.", ex:"Doctors monitored the aneurysm because rupture risk increases with size." },
  { word:"Trail of Tears", pos:"noun", pron:"trayl uhv tearz", def:"The forced removal of the Cherokee and other Indigenous nations from their homelands in the 1830s, resulting in mass suffering and death during relocation to the West.", ex:"The Trail of Tears remains a defining example of state-driven displacement." },
  { word:"Silk Road", pos:"noun", pron:"silk rohd", def:"A network of trade routes linking East Asia, Central Asia, the Middle East, and Europe, enabling exchange of goods, ideas, religions, and disease over centuries.", ex:"The Silk Road spread not only silk and spices, but also technologies and beliefs." },
  { word:"Coup", pos:"noun", pron:"koo", def:"A sudden seizure of political power, typically by military or elite actors, often bypassing constitutional procedures.", ex:"The coup dissolved the parliament overnight." },

  { word:"Pandemic", pos:"noun", pron:"pan-DEM-ik", def:"A disease outbreak that spreads across multiple countries or continents, affecting a large number of people.", ex:"Public health systems were strained during the pandemic." },
  { word:"Epidemic", pos:"noun", pron:"ep-ih-DEM-ik", def:"A rapid increase in cases of a disease within a specific region or population over a short period.", ex:"An epidemic of cholera followed the breakdown of clean water systems." },
  { word:"Endemic", pos:"adjective", pron:"en-DEM-ik", def:"Regularly present in a particular area or population; consistently occurring at a baseline level.", ex:"Malaria is endemic in many tropical regions." },
  { word:"Outbreak", pos:"noun", pron:"OWT-brayk", def:"A sudden rise in disease cases above what is normally expected in a limited area or group.", ex:"The outbreak was contained through rapid isolation and tracing." },
  { word:"Zoonosis", pos:"noun", pron:"zoh-uh-NOH-sis", def:"An infectious disease that spreads from animals to humans, sometimes adapting for human-to-human transmission.", ex:"Many emerging viruses begin as zoonosis events." },
  { word:"Vector-borne", pos:"adjective", pron:"VEK-ter born", def:"Transmitted through an intermediary organism such as mosquitoes, ticks, or fleas.", ex:"Dengue is a vector-borne illness carried by mosquitoes." },
  { word:"Airborne", pos:"adjective", pron:"AIR-born", def:"Capable of spreading through tiny particles that remain suspended in air and can be inhaled.", ex:"Airborne transmission required improved ventilation in crowded buildings." },
  { word:"Incubation period", pos:"noun", pron:"in-kyoo-BAY-shun PEER-ee-ud", def:"The time between infection and the appearance of symptoms, varying by pathogen and host factors.", ex:"The incubation period complicated screening at borders." },
  { word:"Asymptomatic", pos:"adjective", pron:"ay-simp-tuh-MAT-ik", def:"Infected but showing no symptoms, while sometimes still capable of transmitting disease.", ex:"Asymptomatic carriers made detection difficult." },
  { word:"Virulence", pos:"noun", pron:"VEER-yuh-lens", def:"The severity of disease caused by a pathogen, reflecting how damaging it is to the host.", ex:"The new strain showed higher virulence in older adults." },

  { word:"Pathogenicity", pos:"noun", pron:"path-uh-juh-NIS-ih-tee", def:"The ability of an organism to cause disease, distinct from how severe the disease is.", ex:"The mutation increased pathogenicity by improving cell entry." },
  { word:"Transmission", pos:"noun", pron:"tranz-MISH-un", def:"The spread of an infectious agent from one host to another through contact, air, vectors, or other routes.", ex:"Reducing transmission was the first priority of the response." },
  { word:"R0", pos:"noun", pron:"are-NOT", def:"Basic reproduction number; the average number of new infections caused by one case in a fully susceptible population.", ex:"An R0 above 1 suggests cases will grow without intervention." },
  { word:"Herd immunity", pos:"noun", pron:"hurd ih-MYOO-nih-tee", def:"Population-level protection that occurs when enough people are immune, reducing spread and protecting those who are not immune.", ex:"Herd immunity thresholds depend on transmissibility." },
  { word:"Quarantine", pos:"noun", pron:"KWOR-un-teen", def:"Restricting movement of people who may have been exposed to a contagious disease to prevent further spread.", ex:"Quarantine was used for high-risk exposures." },
  { word:"Isolation", pos:"noun", pron:"eye-suh-LAY-shun", def:"Separating infected individuals from others to limit transmission.", ex:"Isolation protocols reduced spread in the ward." },
  { word:"Contact tracing", pos:"noun", pron:"KON-takt TRAY-sing", def:"Identifying and notifying people who were exposed to an infected person so they can test, isolate, or monitor symptoms.", ex:"Contact tracing helped break chains of transmission early on." },
  { word:"Vaccination", pos:"noun", pron:"vak-suh-NAY-shun", def:"Administration of a vaccine to stimulate immunity and reduce risk of infection or severe disease.", ex:"Vaccination campaigns lowered hospitalization rates." },
  { word:"Antibiotic resistance", pos:"noun", pron:"an-tee-bye-OT-ik ri-ZIS-tuns", def:"The ability of bacteria to survive drugs designed to kill them, driven by genetic change and selection.", ex:"Antibiotic resistance made routine infections harder to treat." },
  { word:"Antiviral", pos:"noun", pron:"an-ty-VY-rul", def:"A medication that inhibits viral replication, often most effective when taken early in infection.", ex:"The antiviral shortened symptom duration when started promptly." },

  { word:"Sepsis", pos:"noun", pron:"SEP-sis", def:"A life-threatening organ dysfunction caused by a dysregulated immune response to infection.", ex:"Rapid antibiotics and fluids are critical in sepsis care." },
  { word:"Stroke", pos:"noun", pron:"strohk", def:"Brain injury caused by interrupted blood flow (ischemic) or bleeding (hemorrhagic), often leading to sudden neurological symptoms.", ex:"The patient had a stroke and lost strength on one side." },
  { word:"Myocardial infarction", pos:"noun", pron:"my-oh-KAR-dee-ul in-FARK-shun", def:"A heart attack; death of heart muscle due to blocked blood supply, usually from a clot in a coronary artery.", ex:"Rapid treatment reduced damage from the myocardial infarction." },
  { word:"Atherosclerosis", pos:"noun", pron:"ath-uh-roh-skluh-ROH-sis", def:"A buildup of fatty plaques in arteries that narrows blood vessels and raises risk of heart attack and stroke.", ex:"Atherosclerosis progresses silently for years." },
  { word:"Hypertension", pos:"noun", pron:"hy-per-TEN-shun", def:"Chronically elevated blood pressure that increases strain on blood vessels and organs.", ex:"Hypertension is a major risk factor for aneurysm rupture." },
  { word:"Tuberculosis", pos:"noun", pron:"too-ber-kyuh-LOH-sis", def:"A bacterial infection, often of the lungs, that can become chronic and spread through airborne droplets.", ex:"Tuberculosis control requires long-term antibiotic therapy." },
  { word:"Cholera", pos:"noun", pron:"KOL-er-uh", def:"A severe diarrheal disease caused by contaminated water or food, leading to rapid dehydration and death if untreated.", ex:"Cholera outbreaks follow disruptions in clean water supply." },
  { word:"Smallpox", pos:"noun", pron:"SMOL-poks", def:"A highly contagious viral disease with high mortality, eradicated globally through vaccination.", ex:"Smallpox eradication is a landmark public health achievement." },
  { word:"Influenza", pos:"noun", pron:"in-floo-EN-zuh", def:"A viral respiratory illness that can cause seasonal epidemics and occasional severe pandemics.", ex:"Influenza vaccination reduces severe outcomes." },
  { word:"Plague", pos:"noun", pron:"playg", def:"An infectious disease caused by Yersinia pestis, historically responsible for massive pandemics, transmitted by fleas and respiratory droplets in some forms.", ex:"The plague reshaped societies by reducing populations dramatically." },

  { word:"Black Death", pos:"noun", pron:"blak deth", def:"The 14th-century pandemic, likely bubonic plague, that killed a large portion of Europe’s population and altered economic and social structures.", ex:"The Black Death accelerated labor changes by creating shortages." },
  { word:"Spanish Flu", pos:"noun", pron:"SPAN-ish floo", def:"The 1918 influenza pandemic that caused tens of millions of deaths worldwide during and after World War I.", ex:"The Spanish Flu spread rapidly among troops and civilians." },
  { word:"Germ theory", pos:"noun", pron:"jurm THEE-uh-ree", def:"The scientific understanding that microorganisms cause many diseases, transforming medicine and sanitation.", ex:"Germ theory led to sterilization and infection control practices." },
  { word:"Antiseptic", pos:"noun", pron:"an-tih-SEP-tik", def:"A substance that reduces microbes on living tissue, helping prevent infection.", ex:"Antiseptic use lowered surgical infections." },
  { word:"Sanitation", pos:"noun", pron:"san-ih-TAY-shun", def:"Public health measures involving clean water, waste disposal, and hygiene that reduce disease transmission.", ex:"Improved sanitation dramatically reduced waterborne disease." },
  { word:"Inoculation", pos:"noun", pron:"ih-nok-yuh-LAY-shun", def:"An older method of inducing immunity by exposing someone to a controlled amount of infectious material, preceding modern vaccination.", ex:"Inoculation was practiced before widespread vaccine development." },
  { word:"Epidemiology", pos:"noun", pron:"ep-ih-dee-mee-OL-uh-jee", def:"The study of how diseases spread and why they occur, using data to guide prevention and control.", ex:"Epidemiology identified the source of the outbreak." },
  { word:"Morbidity", pos:"noun", pron:"mor-BID-ih-tee", def:"Illness or disease burden in a population, including prevalence and severity.", ex:"The intervention reduced morbidity even when mortality stayed similar." },
  { word:"Mortality", pos:"noun", pron:"mor-TAL-ih-tee", def:"The rate of death in a population, often measured per time period or per number of people.", ex:"Mortality fell after antibiotics became widely available." },
  { word:"Case fatality rate", pos:"noun", pron:"kays fuh-TAL-ih-tee rayt", def:"The proportion of diagnosed cases that result in death, used to describe severity among detected cases.", ex:"Early estimates of case fatality rate often change as detection improves." },

  { word:"Confederation", pos:"noun", pron:"kun-fed-uh-RAY-shun", def:"A union of independent states that cooperate for certain purposes while retaining sovereignty.", ex:"The early confederation struggled to collect revenue." },
  { word:"Revolution", pos:"noun", pron:"rev-uh-LOO-shun", def:"A fundamental and often rapid transformation of political power or social order, sometimes involving violence.", ex:"The revolution replaced monarchy with a new governing system." },
  { word:"Civil war", pos:"noun", pron:"SIV-ul wor", def:"A war fought within a country between organized groups, often over governance, territory, or identity.", ex:"The civil war fractured institutions and displaced civilians." },
  { word:"Genocide", pos:"noun", pron:"JEN-uh-syde", def:"The deliberate attempt to destroy, in whole or in part, a national, ethnic, racial, or religious group.", ex:"International courts investigated the genocide allegations." },
  { word:"Ethnic cleansing", pos:"noun", pron:"ETH-nik KLEN-zing", def:"The forced removal of an ethnic or religious group from a territory through intimidation, violence, or expulsion.", ex:"Ethnic cleansing campaigns left entire regions depopulated." },
  { word:"Apartheid", pos:"noun", pron:"uh-PAR-tayt", def:"A system of institutionalized racial segregation and discrimination, historically in South Africa.", ex:"Apartheid laws restricted movement, rights, and political representation." },
  { word:"Colonialism", pos:"noun", pron:"kuh-LOH-nee-uh-liz-um", def:"Control by one power over a territory and people, often exploiting resources and reshaping institutions.", ex:"Colonialism altered borders and economies across continents." },
  { word:"Imperialism", pos:"noun", pron:"im-PEER-ee-uh-liz-um", def:"The policy of extending power through domination of other regions by political, economic, or military means.", ex:"Imperialism intensified rivalries among great powers." },
  { word:"Decolonization", pos:"noun", pron:"dee-kol-uh-nuh-ZAY-shun", def:"The process by which colonies gain independence and dismantle imperial control.", ex:"Decolonization reshaped global politics after World War II." },
  { word:"Treaty", pos:"noun", pron:"TREE-tee", def:"A formal agreement between states that creates binding obligations under international law.", ex:"The treaty ended hostilities and set new borders." },

  { word:"Armistice", pos:"noun", pron:"AR-muh-stis", def:"An agreement to stop fighting, often as a step toward a peace treaty.", ex:"The armistice halted combat but did not resolve the underlying conflict." },
  { word:"Partition", pos:"noun", pron:"par-TISH-un", def:"The division of a territory into separate political entities, often causing migration and conflict.", ex:"Partition triggered mass displacement and communal violence." },
  { word:"Annexation", pos:"noun", pron:"an-ek-SAY-shun", def:"The formal incorporation of one territory into another state, often without consent.", ex:"The annexation was condemned by neighboring countries." },
  { word:"Occupation", pos:"noun", pron:"ok-yuh-PAY-shun", def:"Control of a territory by foreign military forces, usually following invasion or conflict.", ex:"The occupation imposed curfews and checkpoints." },
  { word:"Siege", pos:"noun", pron:"seej", def:"A military operation that surrounds and isolates a place to force surrender by cutting off supplies.", ex:"The siege caused severe shortages in the city." },
  { word:"Blockade", pos:"noun", pron:"bluh-KAYD", def:"The isolation of an area to prevent movement of goods or people, often by military forces.", ex:"A naval blockade restricted essential imports." },
  { word:"Embargo", pos:"noun", pron:"em-BAR-goh", def:"A government order restricting trade with a particular country, often used as economic pressure.", ex:"The embargo weakened access to critical technology." },
  { word:"Propaganda", pos:"noun", pron:"prop-uh-GAN-duh", def:"Information used to influence opinions, often selectively presented or misleading, to serve political goals.", ex:"Propaganda portrayed the enemy as inhuman to justify violence." },
  { word:"Censorship", pos:"noun", pron:"SEN-ser-ship", def:"Suppression or control of information, speech, or media by authorities.", ex:"Censorship intensified during the emergency." },
  { word:"Martial law", pos:"noun", pron:"MAR-shul law", def:"Temporary military control over civilian functions during emergencies, often limiting civil liberties.", ex:"Martial law was declared after the uprising." },

  { word:"Inquisition", pos:"noun", pron:"in-kwih-ZISH-un", def:"A historical system of investigation and prosecution for heresy, associated with coercion and political control.", ex:"The inquisition used trials to enforce religious conformity." },
  { word:"Reformation", pos:"noun", pron:"ref-er-MAY-shun", def:"A major religious movement in Europe that challenged Catholic authority and reshaped politics, culture, and conflict.", ex:"The Reformation contributed to a century of religious wars." },
  { word:"Renaissance", pos:"noun", pron:"REN-uh-sahns", def:"A period of renewed interest in art, science, and classical learning in Europe, influencing modern thought and institutions.", ex:"The Renaissance transformed painting and scholarship." },
  { word:"Industrial Revolution", pos:"noun", pron:"in-DUS-tree-ul rev-uh-LOO-shun", def:"A period of rapid industrialization marked by mechanization, urbanization, and major economic and social change.", ex:"The Industrial Revolution expanded factories and changed labor conditions." },
  { word:"Great Depression", pos:"noun", pron:"grayt dih-PRESH-un", def:"A severe global economic downturn beginning in 1929, marked by widespread unemployment and financial collapse.", ex:"The Great Depression reshaped policy and public expectations of government." },
  { word:"World War I", pos:"noun", pron:"wurld wor one", def:"A global conflict from 1914 to 1918 involving major powers, leading to massive casualties and geopolitical change.", ex:"World War I redrew borders and destabilized empires." },
  { word:"World War II", pos:"noun", pron:"wurld wor too", def:"A global war from 1939 to 1945 involving major powers, culminating in the Holocaust and the use of atomic weapons.", ex:"World War II accelerated technological development and created new alliances." },
  { word:"Cold War", pos:"noun", pron:"kohld wor", def:"A prolonged geopolitical rivalry after World War II, mainly between the United States and the Soviet Union, involving proxy wars and nuclear tension.", ex:"The Cold War shaped foreign policy for decades." },
  { word:"Cuban Missile Crisis", pos:"noun", pron:"KYOO-bun MIS-uhl KRY-sis", def:"A 1962 confrontation between the U.S. and Soviet Union over nuclear missiles in Cuba, widely seen as the closest point to nuclear war.", ex:"The Cuban Missile Crisis ended with negotiated withdrawal and de-escalation." },
  { word:"Berlin Wall", pos:"noun", pron:"ber-LIN wawl", def:"A barrier built in 1961 dividing East and West Berlin, symbolizing Cold War separation until it fell in 1989.", ex:"The Berlin Wall’s fall signaled major political change in Europe." },

  { word:"Holocaust", pos:"noun", pron:"HOHL-uh-kawst", def:"The systematic genocide of six million Jews and millions of other victims by Nazi Germany during World War II.", ex:"Holocaust education focuses on the consequences of dehumanization and state power." },
  { word:"Famine", pos:"noun", pron:"FAM-in", def:"Widespread scarcity of food leading to mass hunger and death, often worsened by conflict and policy.", ex:"The famine followed crop failure and disrupted distribution." },
  { word:"Pandemic of 1918", pos:"noun", pron:"pan-DEM-ik uhv nine-TEEN ay-TEEN", def:"The 1918 influenza pandemic that caused extraordinary mortality worldwide, intensified by wartime conditions and limited medicine.", ex:"The pandemic of 1918 overwhelmed hospitals in multiple waves." },
  { word:"Ebola", pos:"noun", pron:"ee-BOH-luh", def:"A viral hemorrhagic fever that can cause severe illness and high fatality rates, spread through bodily fluids.", ex:"Ebola outbreaks require strict protective measures for caregivers." },
  { word:"HIV/AIDS", pos:"noun", pron:"aych-eye-VEE aydz", def:"A viral infection that attacks the immune system; untreated HIV can progress to AIDS, increasing vulnerability to opportunistic infections.", ex:"HIV/AIDS became a global crisis before effective treatments were developed." },
  { word:"Polio", pos:"noun", pron:"POH-lee-oh", def:"A viral disease that can cause paralysis, largely controlled through vaccination campaigns.", ex:"Polio vaccination dramatically reduced cases worldwide." },
  { word:"Measles", pos:"noun", pron:"MEE-zulz", def:"A highly contagious viral illness causing fever and rash, preventable by vaccination but dangerous in vulnerable groups.", ex:"Measles outbreaks often occur where vaccination rates drop." },
  { word:"Yellow fever", pos:"noun", pron:"YEL-oh FEE-ver", def:"A mosquito-borne viral disease that can cause jaundice, bleeding, and organ failure, historically shaping cities and trade.", ex:"Yellow fever repeatedly disrupted port economies in the past." },
  { word:"Typhus", pos:"noun", pron:"TY-fus", def:"A bacterial disease spread by lice, associated historically with war, crowding, and poor sanitation.", ex:"Typhus outbreaks followed refugee movements." },
  { word:"Malaria", pos:"noun", pron:"muh-LAIR-ee-uh", def:"A mosquito-borne parasitic disease that causes fever and can be deadly without treatment.", ex:"Bed nets and medication reduce malaria transmission." },

  { word:"Cancer", pos:"noun", pron:"KAN-ser", def:"A group of diseases involving uncontrolled cell growth that can invade tissues and spread to other parts of the body.", ex:"Early screening improved cancer survival rates." },
  { word:"Metastasis", pos:"noun", pron:"muh-TAS-tuh-sis", def:"The spread of cancer cells from a primary site to distant organs, often making treatment more difficult.", ex:"Metastasis was detected in imaging and changed the treatment plan." },
  { word:"Autoimmune disease", pos:"noun", pron:"aw-toh-ih-MYOON dih-ZEEZ", def:"A condition in which the immune system mistakenly attacks the body’s own tissues.", ex:"Type 1 diabetes is an autoimmune disease." },
  { word:"Diabetes", pos:"noun", pron:"dye-uh-BEE-teez", def:"A metabolic disease involving high blood sugar due to problems with insulin production or response.", ex:"Diabetes management often requires diet changes and medication." },
  { word:"Alzheimer's disease", pos:"noun", pron:"ALTS-hy-merz dih-ZEEZ", def:"A progressive neurodegenerative disorder causing memory loss and cognitive decline, associated with brain changes over time.", ex:"Alzheimer's disease gradually impairs daily functioning." },
  { word:"Parkinson's disease", pos:"noun", pron:"PAR-kin-sunz dih-ZEEZ", def:"A neurodegenerative disorder affecting movement, often causing tremor, stiffness, and slowed motion due to dopamine loss.", ex:"Parkinson's disease can also affect sleep and mood." },
  { word:"Schizophrenia", pos:"noun", pron:"skits-uh-FREE-nee-uh", def:"A severe psychiatric disorder involving disturbances in perception and thought, such as hallucinations and delusions, plus cognitive and social impairment.", ex:"Schizophrenia requires long-term medical and social support." },
  { word:"Depression", pos:"noun", pron:"dih-PRESH-un", def:"A mood disorder marked by persistent sadness, reduced interest, and impaired functioning, beyond ordinary low mood.", ex:"Depression affected sleep, appetite, and concentration." },
  { word:"PTSD", pos:"noun", pron:"pee-tee-ess-DEE", def:"Post-traumatic stress disorder; a condition triggered by trauma, featuring intrusive memories, avoidance, and heightened arousal.", ex:"PTSD symptoms can persist long after the event." },
  { word:"Anemia", pos:"noun", pron:"uh-NEE-mee-uh", def:"A condition where blood has reduced oxygen-carrying capacity, often due to low red blood cells or hemoglobin.", ex:"Iron deficiency anemia caused fatigue and shortness of breath." }
]

// Sanity check: must have at least one entry
if (!Array.isArray(WORDS) || WORDS.length === 0) {
  console.warn("No words loaded.")
}

// ---------- UI logic ----------
let deck = []
let idx = 0
let startOffset = 0
let flipped = false
let started = false

const elCard = document.getElementById("card")
const elProgress = document.getElementById("progress")
const elMode = document.getElementById("mode")
const elStartAt = document.getElementById("startAt")

const btnPrev = document.getElementById("prev")
const btnFlip = document.getElementById("flip")
const btnNext = document.getElementById("next")
const btnRestart = document.getElementById("restart")
const btnStart = document.getElementById("start")

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function shuffle(a) {
  const arr = a.slice()
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
  return arr
}

function setButtons() {
  btnPrev.disabled = !started || idx === 0
  btnNext.disabled = !started || idx === deck.length - 1
  btnFlip.disabled = !started || deck.length === 0
  btnRestart.disabled = !started || deck.length === 0
}

function render() {
  if (!started || deck.length === 0) {
    elCard.className = "card"
    elCard.innerHTML =
      '<div class="face front">' +
        '<div class="word">Press Start</div>' +
        '<div class="hint">Set study count and shuffle, then start.</div>' +
        '<div class="hint">Click card or press Space to flip.</div>' +
      '</div>' +
      '<div class="face back"></div>'

    elProgress.textContent = "0 / 0"
    elMode.textContent = "Not started"
    setButtons()
    return
  }

  const c = deck[idx]
  elProgress.textContent =
    String(startOffset + idx + 1) + " / " + String(WORDS.length)
  elMode.textContent = document.getElementById("shuffle").checked ? "Shuffle" : "In order"

  if (flipped) elCard.classList.add("flipped")
  else elCard.classList.remove("flipped")

  elCard.innerHTML =
    '<div class="face front">' +
      '<div class="word">' + escapeHtml(c.word) + '</div>' +
      '<div class="hint">Click to flip (Space)</div>' +
    '</div>' +
    '<div class="face back">' +
      '<h2>' + escapeHtml(c.word) + '</h2>' +
      '<div class="kv">' +
        '<div class="k">Part of speech</div><div class="v">' + escapeHtml(c.pos) + '</div>' +
        '<div class="k">Pronunciation</div><div class="v">' + escapeHtml(c.pron) + '</div>' +
        '<div class="k">Definition</div><div class="v">' + escapeHtml(c.def) + '</div>' +
      '</div>' +
      '<div class="example"><strong>Example:</strong> ' + escapeHtml(c.ex) + '</div>' +
      '<div class="hint" style="margin-top:10px;">Click to flip back (Space)</div>' +
    '</div>'

  setButtons()
}

function startSession() {
  const n = Number(document.getElementById("count").value || 0)
  const startAtRaw = Number(elStartAt.value || 1)
  const doShuffle = document.getElementById("shuffle").checked
  if (!Number.isFinite(n) || n < 1) return

  const base = doShuffle ? shuffle(WORDS) : WORDS.slice()
  const total = base.length
  if (total === 0) return

  const startAt = Number.isFinite(startAtRaw) ? startAtRaw : 1
  const startIndex = Math.max(0, Math.min(startAt - 1, total - 1))
  const take = Math.min(n, total - startIndex)

  deck = base.slice(startIndex, startIndex + take)
  idx = 0
  startOffset = startIndex
  flipped = false
  started = true
  render()
}

function flip() {
  if (!started) return
  flipped = !flipped
  render()
}

function next() {
  if (!started) return
  if (idx < deck.length - 1) {
    idx++
    flipped = false
    render()
  }
}

function prev() {
  if (!started) return
  if (idx > 0) {
    idx--
    flipped = false
    render()
  }
}

function restart() {
  if (!started) return
  idx = 0
  flipped = false
  render()
}

elCard.addEventListener("click", flip)
btnStart.addEventListener("click", startSession)
btnFlip.addEventListener("click", flip)
btnNext.addEventListener("click", next)
btnPrev.addEventListener("click", prev)
btnRestart.addEventListener("click", restart)

window.addEventListener("keydown", function (e) {
  const k = (e.key || "").toLowerCase()
  if (k === " " || k === "spacebar") { e.preventDefault(); flip(); return }
  if (k === "arrowright") { next(); return }
  if (k === "arrowleft") { prev(); return }
  if (k === "r") { restart(); return }
  if (k === "s") { startSession(); return }
})

render()
